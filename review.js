const assignPersonToLocation = (location, person) => {
  if(person.enabled) {
    location.person = person
    return true
  }
  return false
}

const location = {id:1, name: "Central Park", person: null}
const person = {id: 1, name: "Brooke Cartwright", enabled: false}

const personAssigned = assignPersonToLocation(location, person)

console.log("assignPersonToLocation", assignPersonToLocation)
console.log("personAssigned", personAssigned)
console.log("location", location)
console.log("person property", location.person)