const path = require('path')
const fn = require('./functions')
const _ = require('lodash')
const { toArray, map, groupBy, mergeMap } = require('rxjs/operators')

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
    groupBy(el => el),
    mergeMap(group => group.pipe(toArray())),
    map(words => ({ element: words[0], qtde: words.length })),
    toArray(),
    map(array => _.sortBy(array, el => -el.qtde))
  )
  .subscribe(console.log)