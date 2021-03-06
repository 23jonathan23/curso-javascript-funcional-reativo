const path = require('path')
const fn = require('./functions')
const _ = require('lodash')
const { toArray, map } = require('rxjs/operators')

const pathDir = path.join(__dirname, '..', 'legendas')

const symbols = [
  '.', '?', '-', ',', '"', '♪',
  '_', '<i>', '</i>', '\r', '[',
  ']', '(', ')', '!'
]

fn.readDirectory(pathDir)
  .pipe(
    fn.elementsEndsWith('.srt'),
    fn.readArchive(),
    fn.splitTextBy('\n'),
    fn.removeIfEmpty(),
    fn.removeIfOnlyNumber(),
    fn.removeCharacters(symbols),
    fn.splitTextBy(' '),
    fn.removeIfEmpty(),
    fn.removeIfOnlyNumber(),
    toArray(),
    fn.agroupElements(),
    map(array => _.sortBy(array, el => -el.qtde))
  )
  .subscribe(console.log)