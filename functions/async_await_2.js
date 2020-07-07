const gerarNumerosEntre = (min, max, numerosProibidos) => {
  min > max ? [max, min] = [min, max] : null

  return new Promise((resolve, reject) => {
    const fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator) + min
    if (numerosProibidos.includes(aleatorio)) {
      reject('Numero Repetido')
    } else {
      resolve(aleatorio)
    }
  })
}

const gerarMegaSena = async (qtdNum, tentativas = 1) => {
  try {
    const numeros = []
    for (let _ of Array(qtdNum).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros))
    }
    return numeros
  } catch {
    if (tentativas > 100) {
      throw "Não deu certo!"
    } else {
      return gerarMegaSena(qtdNum, tentativas + 1)
    }
  }
}

gerarMegaSena(3)
  .then(console.log)
  .catch(console.log)