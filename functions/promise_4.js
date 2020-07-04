const gerarNumerosEntre = (min, max, tempo) => {
  min > max ? [max, min] = [min, max] : null

  return new Promise(resolve => {
    const fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator) + min
    setTimeout(_ => {
      resolve(aleatorio)
    }, tempo)
  })
}

const gerarVariosNumeros = _ => {
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 1500),
  ])
}

console.time('promise')

gerarVariosNumeros()
  .then(console.log)
  .then(_ => {
    console.timeEnd('promise')
  })