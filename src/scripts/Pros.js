import {fetchPros, getPros, setPro, setProsFilteredByUser} from "./provider.js"

const proElement = document.getElementById("pros")

export const Pros = () => {
  const pros = getPros()
  let html = "<h2>Pros</h2><ul id='prosList'>"
  html += pros.map(pro => {
      return `
      <li value="${pro.id}">${pro.statement}</li>
      `
  }).join("")
  html += `</ul>`
  html += `
  <div>
    <input type="text" id="newPro" /><button id="setNewPro">Add Pro</button>
  </div>
  <select id="userPro">
    <option value="Sydney">Sydney</option>
    <option value="Blaise">Blaise</option>
    <option value="Lynn">Lynn</option>
  </select>
  <select id="filterPros">
    <option disabled selected>Filter Pros</option>
    <option value="Sydney">Sydney</option>
    <option value="Blaise">Blaise</option>
    <option value="Lynn">Lynn</option>
    <option value="">Clear</option>
  </select>
  `
  return html
}

const renderPros = () => {
  fetchPros().then(() => {
    Pros()
    proElement.innerHTML = Pros()
  })
}

proElement.addEventListener("click", e => {
  if(e.target.id === "setNewPro") {
    const statement = document.getElementById("newPro").value
    const userProIndx = document.getElementById("userPro").options.selectedIndex
    const userPro = document.getElementById("userPro").options[userProIndx].value
    const newPro = {
      user: userPro,
      statement: statement
    }
    setPro(newPro)
  }
})

proElement.addEventListener("change", e => {
  if(e.target.id === "filterPros") {
    const userProIndx = document.getElementById("filterPros").options.selectedIndex
    const user = document.getElementById("filterPros").options[userProIndx].value
    setProsFilteredByUser(user)
  }

  
})
proElement.addEventListener("prosChanged", e => {
  renderPros()
})