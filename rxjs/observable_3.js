//desafio

const { Observable, noop } = require('rxjs')

function entry(min, max) {
  return new Observable(subscriber => {
    Array(max - min).fill().map((_, i) => {
      subscriber.next(min + i)
    })
    subscriber.complete()
  })
}

entry(4, 10)
  .subscribe(
    num => console.log(`num = ${num}`),
    noop,
    () => console.log('Fim!')
  )