const apiURL = "http://localhost:8089"
const applicationElement = document.getElementById("container")

const proElement = document.getElementById("pros")
const conElement = document.getElementById("cons")

let applicationState = {
  pros: [],
  cons: [],
  filterUser: ""
}

export const fetchPros = () => {
  return fetch(`${apiURL}/pros`)
      .then(res => res.json())
      .then(pros => {
          applicationState.pros = pros
      })
}

export const fetchCons = () => {
  return fetch(`${apiURL}/cons`)
      .then(res => res.json())
      .then(cons => {
          applicationState.cons = cons
      })
}

export const getPros = () => {
  if(applicationState.filterUser !== "") {
    return applicationState.pros.filter(pro => {
      return pro.user === applicationState.filterUser
    })
  } else {
    return applicationState.pros.map(pro => ({...pro }))
  }
}

export const getCons = () => {
  return applicationState.cons.map(con => ({...con }))
}

export const setProsFilteredByUser = (user) => {
  applicationState.filterUser = user
  proElement.dispatchEvent(new CustomEvent("prosChanged"))
}

export const setPro = (pro) => {
  const fetchOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify( pro)
  }
  return fetch(`${apiURL}/pros`, fetchOptions).then(() => {
    proElement.dispatchEvent(new CustomEvent("prosChanged"))
  })
}

export const setCon = (con) => {
  const fetchOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({statement: con})
  }
  return fetch(`${apiURL}/cons`, fetchOptions).then(() => {
    conElement.dispatchEvent(new CustomEvent("consChanged"))
  })
}