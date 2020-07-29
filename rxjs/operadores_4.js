const { from, Observable } = require('rxjs')

//Criando operadores pipe
function first() {
  return source => Observable.create(subscriber => {
    source.subscribe({
      next(v) {
        subscriber.next(v)
        subscriber.complete()
      }
    })
  })
}

function last() {
  return source => Observable.create(subscriber => {
    let lastElement
    source.subscribe({
      next(v) {
        lastElement = v
      },
      complete() {
        if (lastElement !== undefined) {
          subscriber.next(lastElement)
        }
        subscriber.complete()
      }
    })
  })
}

from([1, 3, 4, 5, 6])
  // .pipe(first())
  .pipe(last())
  .subscribe(console.log)