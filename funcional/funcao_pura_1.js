//Uma função pura é uma função que o valor
//de retorno é determinado APENAS por seus valores
//de entrada, sem efeitos colaterais observáveis.

//Impura
function calcArea(lightning) {
  return lightning * lightning * Math.PI
}

console.log(calcArea(10))

//Pura
function calcAreaPure(lightning, PI) {
  return lightning * lightning * PI
}

console.log(calcAreaPure(10, 3.14))