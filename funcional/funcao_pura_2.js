//Impura
function genereteRandomNumber(min, max) {
  const fator = max - min + 1
  return parseInt(Math.random() * fator) + min
}

console.log(genereteRandomNumber(1, 1000))