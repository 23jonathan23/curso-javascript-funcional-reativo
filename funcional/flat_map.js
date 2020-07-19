const nestedLetters = ['o', ['l', ['á']], '!']

const letters = nestedLetters.flat(Infinity)

const result = letters
  .map(l => l.toUpperCase())
  .reduce((a, b) => a + b)

console.log(result)