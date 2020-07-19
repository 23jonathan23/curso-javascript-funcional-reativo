const path = require('path')
const fn = require('./functions')

const pathDir = path.join(__dirname, '..', 'legendas')

const symbols = [
  '.', '?', '-', ',', '"', '♪',
  '_', '<i>', '</i>', '\r', '[',
  ']', '(', ')', '!'
]

const execute = fn.composition(
  fn.readDirectory,
  fn.elementsEndsWith('.srt'),
  fn.readArchives,
  fn.joinElements,
  fn.splitTextBy('\n'),
  fn.removeIfEmpty,
  fn.removeIfIncludes('-->'),
  fn.removeIfOnlyNumber,
  fn.removeIfIncludes('<font'),
  fn.removeCharacters(symbols),
  fn.joinElements,
  fn.splitTextBy(' '),
  fn.removeIfEmpty,
  fn.removeIfOnlyNumber,
  fn.agroupElements,
  fn.sortElementByAttrNumber('qtde', 'desc'),
  console.log
)

execute(pathDir)