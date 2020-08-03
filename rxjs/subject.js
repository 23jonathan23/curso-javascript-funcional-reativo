const { Observable, Subject } = require('rxjs')

const getObservable = _ => new Observable.create(subscriber => {
  setTimeout(_ => {
    console.log('#1 Obs...')
    subscriber.next(Math.random())
    subscriber.complete()
  }, 1000)
})

const obs = getObservable()
obs.subscribe(console.log)
obs.subscribe(console.log)

const getSubject = _ => {
  const sub = new Subject
  setTimeout(_ => {
    console.log('#2 Sub...')
    sub.next(Math.random())
    sub.complete()
  }, 1000)
  return sub
}

const sub = getSubject()
sub.subscribe(console.log)
sub.subscribe(console.log)