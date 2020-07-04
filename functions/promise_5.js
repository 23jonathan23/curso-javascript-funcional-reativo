const funcionarOuNao = (valor, chanceErro) => {
  return new Promise((resolve, reject) => {
    Math.random() < chanceErro
      ? reject('Ocorreu um erro')
      : resolve(valor)
  })
}

funcionarOuNao('Testando....', 0.5)
  .then(v => `Valor: ${v}`)
  .then(
    v => consol.log(v),
    err => console.log(`Erro Esp.: ${err}`)
  )
  .then(_ => console.log('Quase Fim!'))
  .catch(err => console.log(`Erro: ${err}`))
  .then(_ => console.log('Fim!'))