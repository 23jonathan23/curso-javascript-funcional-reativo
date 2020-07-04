const fs = require('fs')
const path = require('path')

const lerArquivo = caminhoArquivo => {
  return new Promise(resolve => {
    fs.readFile(caminhoArquivo, (_, conteudo) => {
      resolve(conteudo)
    })
  })
}

const caminhoArquivo = path.join(__dirname, 'texto.txt')

lerArquivo(caminhoArquivo)
  .then(conteudo => conteudo.toString())
  .then(conteudo => conteudo.split('\n'))
  .then(linhas => linhas.join(','))
  .then(conteudo => `O valor final é: ${conteudo}`)
  .then(console.log)
