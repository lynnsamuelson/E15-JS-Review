import {getCons, setCon, fetchCons} from "./provider.js"

const conElement = document.getElementById("cons")

export const Cons = () => {
  const cons = getCons()
  let html = "<h2>Cons</h2><ul id='consList'>"
  html += cons.map(con => {
      return `
      <li value="${con.id}">${con.statement}</li>
      `
  }).join("")
  html += `</ul>`
  html += `<div><input type="text" id="newCon" /><button id="setNewCon">Add Con</button></div>`
  return html
}

const renderCons = () => {
  fetchCons().then(() => {
    Cons()
    conElement.innerHTML = Cons()
  })
}

conElement.addEventListener("click", e => {
  if(e.target.id === "setNewCon") {
    const newCon = document.getElementById("newCon").value
    setCon(newCon)
  }
})

conElement.addEventListener("consChanged", e => {
  renderCons()
})