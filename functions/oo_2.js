class Produto {

  constructor(nome, preco, desc) {
    this._nome = nome
    this.preco = preco
    this._desc = desc
  }

  precoFinal = _ => this.preco * (1 - this.desc)

  get nome() {
    return `O nome do produto é ${this._nome}`
  }

  set desc(valor) {
    this._desc = valor
  }
}

const p1 = new Produto('Caneta', 10, 0.5)
console.log(p1)
const p2 = new Produto('Geladeira', 1000, 0.6)
console.log(p2)
p1.desc = 0.8
console.log(p1)