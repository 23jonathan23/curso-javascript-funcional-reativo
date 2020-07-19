function composition(...fns) {
  return value => fns.reduce((acc, fn) => fn(acc), value)
}

const shoutOut = text => text.toUpperCase()

const toEmphasize = text => `${text}!!!`

const show = text => text.split('').join(' ')

const exaggerated = composition(shoutOut, toEmphasize, show)

const result = exaggerated('para')
const result1 = exaggerated('Cuidado com o burado')

console.log(result)
console.log(result1)