const fs = require('fs')
const path = require('path')
const { Observable } = require('rxjs')

function createPipeableOperator(operatorFn) {
  return source => Observable.create(subscriber => {
    let sub = operatorFn(subscriber)
    source.subscribe({
      next: sub.next,
      error: sub.error || (e => subscriber.error(e)),
      complete: sub.complete || (_ => subscriber.complete())
    })
  })
}

const readDirectory = pathDir => {
  return new Observable.create(subscriber => {
    try {
      fs.readdirSync(pathDir).forEach(archive => {
        subscriber.next(path.join(pathDir, archive))
      })
      subscriber.complete()
    } catch (err) {
      subscriber.error(err)
    }
  })
}

const elementsEndsWith = textualPattern => createPipeableOperator(subscriber => ({
  next(text) {
    if (text.endsWith(textualPattern)) {
      subscriber.next(text)
    }
  }
}))

const readArchive = _ => createPipeableOperator(subscriber => ({
  next(pathArchive) {
    try {
      const archives = fs.readFileSync(pathArchive, { encoding: 'utf-8' }).toString()
      subscriber.next(archives)
    } catch (err) {
      subscriber.error()
    }
  }
}))

const removeIfEmpty = _ => createPipeableOperator(subscriber => ({
  next(text) {
    if (text.trim()) subscriber.next(text)
  }
}))

const removeIfOnlyNumber = _ => createPipeableOperator(subscriber => ({
  next(text) {
    if (isNaN(parseInt(text))) subscriber.next(text)
  }
}))

const removeCharacters = symbols => createPipeableOperator(subscriber => ({
  next(text) {
    const newText = symbols.reduce((acc, symbol) =>
      acc.split(symbol).join(''), text)
    subscriber.next(newText)
  }
}))

const splitTextBy = symbol => createPipeableOperator(subscriber => ({
  next(text) {
    text.split(symbol).forEach(part => {
      subscriber.next(part)
    })
  }
}))

const agroupElements = _ => createPipeableOperator(subscriber => ({
  next(elements) {
    const grouped = Object.values(elements.reduce((agroup, element) => {
      const elementLower = element.toLowerCase()
      const qtde = agroup[elementLower] ? agroup[elementLower].qtde + 1 : 1
      agroup[elementLower] = { element: elementLower, qtde }
      return agroup
    }, {}))
    subscriber.next(grouped)
  }
}))

module.exports = {
  readDirectory,
  elementsEndsWith,
  readArchive,
  removeIfEmpty,
  removeIfOnlyNumber,
  removeCharacters,
  splitTextBy,
  agroupElements,
}