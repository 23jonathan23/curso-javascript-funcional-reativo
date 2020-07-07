function Produto(nome, preco, desc = 0.50) {
  this.nome = nome
  this.preco = preco
  this._desc = desc

  this.precoFinal = _ => this.preco * (1 - this.desc)
}

Produto.prototype.log = function () {
  console.log(`Nome: ${this.nome} Preço: R$ ${this.preco}`)
}

Object.defineProperty(Produto.prototype, 'desc', {
  get: function () {
    return this._desc
  },
  set: function (novoDesc) {
    if (novoDesc >= 0 && novoDesc <= 1) {
      this._desc = novoDesc
    }
  }
})

const p1 = new Produto('Caneta', 10)
console.log(p1)
const p2 = new Produto('Geladeira', 1000)
console.log(p2)
p2.desc = 0.8
console.log(p2.desc)