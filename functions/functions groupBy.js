const orders = [
  { date: "2020/07/01", name: 'Antonio' },
  { date: "2020/07/01", name: 'Carla' },
  { date: "2020/07/02", name: 'Barla' },
  { date: "2020/07/03", name: 'Jarla' },
  { date: "2020/07/02", name: 'Arla' },
  { date: "2020/07/01", name: 'Ana' },
  { date: "2020/07/03", name: 'Earll' },
]

const agruparPor = array => {

  let posicao = 0

  return atributo => array.reduce((acc, o, i) => {
    if (i !== 0) {
      if (acc[posicao][0].date === o[atributo]) {
        acc[posicao].push(o)
      } else {
        let index
        let diferente = false
        acc.forEach((array, i) => {
          if (array[0].date === o[atributo]) {
            index = i
            diferente = true
          }
        })

        if (!diferente) {
          posicao++
          acc.push([])
          acc[posicao].push(o)
        } else {
          acc[index].push(o)
        }
      }
    } else {
      acc.push([])
      acc[posicao].push(o)
    }

    return acc
  }, [])

}

const ordenarPorAlfabeto =
  (a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)

const ordenarArray = array => array.map(arr => arr.sort(ordenarPorAlfabeto))

const result = agruparPor(orders)('date')
console.log(result)