function textWithLengthInBetween(min, max, throw1, text) {
  const length = (text || '').trim().length

  if (length < min || length > max) throw throw1

}

const p1 = { name: 'A', price: 14.99, disc: 0.25 }

textWithLengthInBetween(4, 255, 'Nome inválido', p1.name)