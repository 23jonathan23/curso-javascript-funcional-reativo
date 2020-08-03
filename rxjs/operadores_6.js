const { from, Observable } = require('rxjs')

//Criando operadores pipe
function createPipeableOperator(operatorFn) {
  return source => Observable.create(subscriber => {
    let sub = operatorFn(subscriber)
    source.subscribe({
      next: sub.next,
      error: sub.error || (e => subscriber.error(e)),
      complete: sub.complete || (_ => subscriber.complete())
    })
  })
}

function first() {
  return createPipeableOperator(subscriber => ({
    next(v) {
      subscriber.next(v)
      subscriber.complete()
    }
  }))
}

function last() {
  return createPipeableOperator(subscriber => ({
    next(v) {
      lastElement = v
    },
    complete() {
      if (lastElement !== undefined) {
        subscriber.next(lastElement)
      }
      subscriber.complete()
    }
  }))
}

from([1, 3, 4, 5, 6])
  // .pipe(first())
  .pipe(last())
  .subscribe(console.log)