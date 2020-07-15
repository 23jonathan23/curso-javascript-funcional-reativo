let qtd = 0

//Impura
function sum(a, b) {
  qtd++ //efeitos colaterais oberváveis
  return a + b
}

console.log(qtd)
console.log(sum(1, 3))
console.log(sum(1, 3))
console.log(sum(1, 3))
console.log(qtd)