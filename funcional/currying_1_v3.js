const textWithLengthInBetween =
  min => max => throw1 => text => { //Lazy Evaluation
    const length = (text || '').trim().length

    if (length < min || length > max) throw throw1
  }

const toApplyValidation = fn => value => {
  //Lazy Evaluation
  try {
    fn(value)
  } catch (err) {
    return { error: err }
  }
}

const toForceLengthDefault = textWithLengthInBetween(4)(255)
const toForceNameProductValid = toForceLengthDefault('Nome produto inválido')
const validateNameProduct = toApplyValidation(toForceNameProductValid)

const p1 = { name: 'A', price: 14.99, disc: 0.25 }

console.log(validateNameProduct(p1.name))