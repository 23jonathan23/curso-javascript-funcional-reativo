const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 3, preco: 100.89 },
  { nome: 'Caderno', qtde: 8, preco: 9.00 },
  { nome: 'Borracha', qtde: 2, preco: 1.09 },
]

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => acc + el

const totalGeral = carrinho.map(getTotal).reduce(somar)
console.log(totalGeral.toFixed(2))

Array.prototype.meuReduce = function (fn, inicial) {
  let acc = inicial
  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i]
    } else {
      acc = fn(acc, this[i], i, this)
    }
  }
  return acc
}

const totalGeral2 = carrinho.map(getTotal).meuReduce(somar)
console.log(totalGeral2.toFixed(2))
