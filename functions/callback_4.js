const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 3, preco: 100.89 },
  { nome: 'Caderno', qtde: 8, preco: 9.00 },
  { nome: 'Borracha', qtde: 2, preco: 1.09 },
]

const getNome = item => item.nome
const qdteMaiorQueZero = item => item.qtde > 0

const nomeItensValido = carrinho.filter(qdteMaiorQueZero).map(getNome)
console.log(nomeItensValido)

Array.prototype.meuFilter = function (fn) {
  const novoArray = []

  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this) ? novoArray.push(this[i]) : null
  }

  return novoArray

}

console.log(carrinho.filter(qdteMaiorQueZero).map(getNome))