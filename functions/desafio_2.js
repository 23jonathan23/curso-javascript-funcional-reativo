const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
  { nome: 'Impressora', qtde: 3, preco: 100.89, fragil: false },
  { nome: 'Caderno', qtde: 8, preco: 9.00, fragil: true },
  { nome: 'Borracha', qtde: 2, preco: 1.09, fragil: false },
]

//filter, map, reduce

//1. fragil: true
//2. qdte * preco => total
//3. media totais

const itemFragil = item => item.fragil === true
const itensTotal = item => item.qtde * item.preco
const mediaTotais = (acc, item, index, array) => index < (array.length - 1) ? acc + item : (acc + item) / array.length

const resultado = carrinho.filter(itemFragil).map(itensTotal).reduce(mediaTotais)
console.log(resultado)
