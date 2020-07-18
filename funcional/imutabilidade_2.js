const nums = [1, 2, 3, 4, 5]

//3 - Recursividade
function sumArray(array, ammount = 0) {
  if (array.length === 0) {
    return ammount
  }
  return sumArray(array.slice(1), ammount + array[0])
}

console.log(sumArray(nums))

//2 - Reduce
const sum = (a, b) => a + b
const amount = nums.reduce(sum)
console.log(amount)

//1 - Dados mutáveis
let amountData = 0

for (let i = 0; i < nums.length; i++) {
  amountData += nums[i]
}

console.log(amountData)
