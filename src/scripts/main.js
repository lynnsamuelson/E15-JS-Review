import { Pros } from "./Pros.js"
import { Cons } from "./Cons.js"
import { fetchPros, fetchCons } from "./provider.js"

const proElement = document.getElementById("pros")
const conElement = document.getElementById("cons")

export const renderApp = () => {
  fetchPros().then(() => {
    fetchCons().then(() => {
      conElement.innerHTML = Cons()
      proElement.innerHTML = Pros()
    })
  })
}

renderApp()