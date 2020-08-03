const fs = require('fs')
const path = require('path')
const { Observable } = require('rxjs')

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

const elementsEndsWith = filter => array => array.filter(el => el.endsWith(filter))

const readArchive = pathArchive => new Promise((resolve, reject) => {
  try {
    resolve(fs.readFileSync(pathArchive, { encoding: 'utf-8' }).toString())
  } catch (err) {
    reject(err)
  }
})

const readArchives = pathArchives =>
  Promise.all(pathArchives.map(path => readArchive(path)))

const removeIfEmpty = array => array.filter(el => el.trim())

const removeIfIncludes = text => array => array.filter(el => !el.includes(text))

const removeIfOnlyNumber = array => array.filter(el => isNaN(parseInt(el)))

const removeCharacters = symbols =>
  array => array.map(el => symbols.reduce((acc, symbol) =>
    acc.split(symbol).join(''), el))

const joinElements = array => array.join(' ')

const splitTextBy = symbol => array => array.split(symbol)

const agroupElements = elements =>
  Object.values(elements.reduce((agroup, element) => {
    const elementLower = element.toLowerCase()
    const qtde = agroup[elementLower] ? agroup[elementLower].qtde + 1 : 1
    agroup[elementLower] = { element: elementLower, qtde }
    return agroup
  }, {}))

const sortElementByAttrNumber = (attr, order = 'asc') => array => {
  const asc = (a, b) => a[attr] - b[attr]
  const desc = (a, b) => b[attr] - a[attr]

  return array.sort(order === 'asc' ? asc : desc)

}

module.exports = {
  readDirectory,
  elementsEndsWith,
  readArchives,
  readArchive,
  removeIfEmpty,
  removeIfIncludes,
  removeIfOnlyNumber,
  removeCharacters,
  joinElements,
  splitTextBy,
  agroupElements,
  sortElementByAttrNumber
}