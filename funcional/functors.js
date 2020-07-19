//Functors são objetos que implementam a função MAP
//que também é um "wrapper" de uma valor

//Array é um exemplo de Functors
const nums = [1, 2, 3, 4, 5, 6]

const newNums = nums
  .map(el => el + 10)
  .map(el => el * 2)

console.log(nums, newNums)

function safeType(value) {
  return {
    value,
    invalid() {
      return this.value === null || this.value === undefined
    },
    map(fn) {
      if (this.invalid()) {
        return safeType(null)
      } else {
        const newValue = fn(this.value)
        return safeType(newValue)
      }
    },
    flatMap(fn) {
      return this.map(fn).value
    }
  }
}

const original = 'Esse é um texto'
const alterValue = safeType(original)
  .map(t => t.toUpperCase())
  .map(t => `${t}!!!`)
  .flatMap(t => t.split('').join(' '))

console.log(alterValue)
