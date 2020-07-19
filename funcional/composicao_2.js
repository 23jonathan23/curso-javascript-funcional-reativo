function composition(...fns) {
  return value => fns.reduce(async (acc, fn) => {
    if (Promise.resolve(acc) === acc) {
      return fn(await acc)
    } else {
      return fn(acc)
    }
  }, value)
}

const shoutOut = text => text.toUpperCase()

const toEmphasize = text => `${text}!!!`

const show = text => new Promise(resolve => {
  setTimeout(_ => {
    resolve(text.split('').join(' '))
  }, 3000)
})

const exaggerated = composition(shoutOut, toEmphasize, show)
const exaggerated1 = composition(shoutOut, toEmphasize)

exaggerated('para')
  .then(console.log)
exaggerated1('Cuidado com o burado')
  .then(console.log)