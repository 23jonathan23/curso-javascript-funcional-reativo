const people = {
  name: 'Maria',
  height: 1.76,
  city: 'Sao Paulo',
  address: {
    street: 'Happy'
  }
}

//Atribuição por Referência
const outherPeople = people

//Passagem por Referência(Função impura)
function alterPeople(people) {
  const newPeople = { ...people }
  newPeople.name = 'João'
  newPeople.city = 'New York'
  newPeople.address.street = 'ABC'
  return newPeople
}

const newPeople = alterPeople(people)
console.log(people)
console.log(newPeople)

let a = 3
let b = a //atribuição por valor

a++