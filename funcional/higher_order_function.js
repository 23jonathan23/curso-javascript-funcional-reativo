//Funções que operam em outras funções,
//tomando-as como argumentos ou retornando-as,
//são chamadas de higher-order functions.

function execute(fn, ...values) {
  return function (initialText) {
    return `${initialText} ${fn(...values)}`
  }
}

function sum(a, b) {
  return a + b
}

function mult(a, b) {
  return a * b
}

const r1 = execute(sum, 2, 10)('O resultado é')
const r2 = execute(mult, 2, 10)('O resultado da multiplicação é')

console.log(r1)
console.log(r2)