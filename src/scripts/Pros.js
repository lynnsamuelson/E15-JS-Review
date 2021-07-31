import {fetchPros, getPros, setPro} from "./provider.js"

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
  html += `<div><input type="text" id="newPro" /><button id="setNewPro">Add Pro</button></div>`
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
    const newPro = document.getElementById("newPro").value
    setPro(newPro)
  }
})
proElement.addEventListener("prosChanged", e => {
  renderPros()
})