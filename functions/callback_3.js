const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 3, preco: 100.89 },
  { nome: 'Caderno', qtde: 8, preco: 9.00 },
  { nome: 'Borracha', qtde: 2, preco: 1.09 },
]

const getItem = item => item.nome
const somarValores = i => i.qtde * i.preco

const nomesItens = carrinho.map(getItem)
const valorTotalItens = carrinho.map(somarValores)
console.log(nomesItens)
console.log(valorTotalItens)

Array.prototype.meuMap = function (fn) {
  const novoArray = []
  for (let i = 0; i < this.length; i++) {
    novoArray.push(fn(this[i], i, this))
  }
  return novoArray
}

console.log(carrinho.meuMap(getItem))