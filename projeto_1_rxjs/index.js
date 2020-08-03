const path = require('path')
const fn = require('./functions')

const pathDir = path.join(__dirname, '..', 'legendas')

const symbols = [
  '.', '?', '-', ',', '"', '♪',
  '_', '<i>', '</i>', '\r', '[',
  ']', '(', ')', '!'
]

fn.readDirectory(pathDir)
  .subscribe(console.log)

// fn.readDirectory(pathDir)
//   .then(fn.elementsEndsWith('.srt'))
//   .then(fn.readArchives)
//   .then(fn.joinElements)
//   .then(fn.splitTextBy('\n'))
//   .then(fn.removeIfEmpty)
//   .then(fn.removeIfIncludes('-->'))
//   .then(fn.removeIfOnlyNumber)
//   .then(fn.removeIfIncludes('<font'))
//   .then(fn.removeCharacters(symbols))
//   .then(fn.joinElements)
//   .then(fn.splitTextBy(' '))
//   .then(fn.removeIfEmpty)
//   .then(fn.removeIfOnlyNumber)
//   .then(fn.agroupElements)
//   .then(fn.sortElementByAttrNumber('qtde', 'desc'))
//   .then(console.log)