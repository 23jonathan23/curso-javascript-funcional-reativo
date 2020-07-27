const { interval } = require('rxjs')

const generateNumbers = interval(500)

const sub1 = generateNumbers.subscribe(num => {
  console.log(Math.pow(2, num))
})

const sub2 = generateNumbers.subscribe(console.log)

setTimeout(() => sub1.unsubscribe(), 8000)
setTimeout(() => sub2.unsubscribe(), 6000)