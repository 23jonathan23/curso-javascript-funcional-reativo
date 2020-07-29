const { of, Observable } = require('rxjs')

function finalyWith(lastPart) {
  return source => Observable.create(subscriber => {
    source.subscribe({
      next(value) {
        if (Array.isArray(value)) {
          subscriber.next(value.filter(el => el.endsWith(lastPart)))
        } else if (value.endsWith(lastPart)) {
          subscriber.next(value)
        }
      },
      error(e) {
        subscriber.error(e)
      },
      complete() {
        subscriber.complete()
      }
    })
  })
}

of('Ana Silva', 'Maria Silva', 'Pedro Rocha')
  .pipe(finalyWith('Silva'))
  .subscribe(console.log)