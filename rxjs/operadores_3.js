const { Observable } = require('rxjs')

//criar operador de criação
function elementsWithDelay(time, ...elements) {
  return Observable.create(subscriber => {
    (elements || []).forEach((el, i) => {
      setTimeout(_ => {
        subscriber.next(el)
        if (elements.length === i + 1) {
          subscriber.complete()
        }
      }, time * (i + 1))
    })
  })
}

elementsWithDelay(1000, 1, 2, 3, 4, 5, 6)
  .subscribe(console.log)