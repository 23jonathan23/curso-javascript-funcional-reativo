//1. Operadores de Criação
const { from } = require('rxjs')

//2. Operadores Encadeáveis
const { last, map } = require('rxjs/operators')

from([1, 2, 'ana', false, 'último'])
  .pipe(
    last(),
    map(v => v[0]),
    map(v => `A letra encontrada foi: ${v}`)
  )
  .subscribe(console.log)