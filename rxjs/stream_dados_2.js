function generateElements(array) {
  return {
    initial(fn) {
      let index = 0
      const i = setInterval(() => {
        if (index >= array.length) {
          clearInterval(i)
        } else {
          fn(array[index])
          index++
        }
      }, 1000)

      return {
        stop() {
          clearInterval(i)
        }
      }
    }
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const temp1 = generateElements(numbers)

const exec1 = temp1.initial(num => {
  console.log(Math.pow(2, num))
})

setTimeout(() => {
  exec1.stop()
}, 4000)

generateElements(['Ana', 'Bia', 'Carlos']).initial(console.log)