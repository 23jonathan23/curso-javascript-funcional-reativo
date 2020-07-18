//Closure é quando uma função "lembra"
//seu escopo léxico, mesmo quando a função
//é executada fora desse escopo léxico

const sumPlus = require('./closure_escopo')

const x = 5

console.log(sumPlus())