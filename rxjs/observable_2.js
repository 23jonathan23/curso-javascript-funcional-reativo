const { Observable } = require('rxjs')

const obs = Observable.create(subscriber => {
  subscriber.next('RxJS')
  subscriber.next('é')
  subscriber.next('bem')
  subscriber.next('poderoso')

  if (Math.random() > 0.5) {
    subscriber.complete()
  } else {
    subscriber.error('Que Problema?')
  }

})

obs.subscribe(
  valor => console.log(`Valor ${valor}`),
  error => console.log(`Erro: ${error}`),
  _ => console.log('Fim!')
)

obs.subscribe({
  next(valor) {
    console.log(`Valor ${valor}`)
  },
  error(err) {
    console.log(`Erro: ${err}`)
  },
  complete() {
    console.log('Fim!')
  }
})