const assignPersonToLocation = (location, person) => {
  if(person.enabled) {
    location.person = person
    return true
  }
  return false
}

const locationB = {id:1, name: "Central Park", person: null}
const locationT = {id:1, name: "Central Park", person: null}
const Tatiana = {id: 1, name: "Tatiana", enabled: true}
const Brittany = {id: 2, name: "Brittany", enabled: false}

// const personAssignedTatiana = assignPersonToLocation(locationT, Tatiana)
const personAssignedBrittany = assignPersonToLocation(locationB, Brittany)

// console.log("personAssignedTatiana", personAssignedTatiana)
console.log("personAssignedBrittany", personAssignedBrittany)
