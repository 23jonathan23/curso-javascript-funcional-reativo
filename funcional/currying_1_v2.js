const textWithLengthInBetween =
  min => max => throw1 => text => { //Lazy Evaluation
    const length = (text || '').trim().length

    if (length < min || length > max) throw throw1
  }

const toForceLengthDefault = textWithLengthInBetween(4)(255)
const toForceNameProductValid = toForceLengthDefault('Nome produto inválido')

const p1 = { name: 'A', price: 14.99, disc: 0.25 }

toForceNameProductValid(p1.name)