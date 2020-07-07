const esperarPor = time => {
  return new Promise(resolve => {
    setTimeout(_ => {
      resolve()
    }, time)
  })
}

const retornarValorRapido = async _ => {
  return 20
}

const executar = async _ => {
  let valor = await retornarValorRapido()

  await esperarPor(1500)
  console.log(`Async/Await 1... ${valor}`)

  await esperarPor(1500)
  console.log(`Async/Await 2... ${valor}`)

  await esperarPor(1500)
  console.log(`Async/Await 3... ${valor}`)
}

executar()