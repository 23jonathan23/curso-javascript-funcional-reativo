function Produto(nome, preco, desc = 0.50) {
  this.nome = nome
  this.preco = preco
  this.desc = desc

  this.precoFinal = _ => this.preco * (1 - this.desc)
}

const p1 = new Produto('Caneta', 10)
console.log(p1)
const p2 = new Produto('Geladeira', 1000)
console.log(p2)