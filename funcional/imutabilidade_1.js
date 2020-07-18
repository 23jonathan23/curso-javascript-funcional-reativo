function sort(array) {
  return [...array].sort((a, b) => a - b)
}

const nums = [3, 2, 1, 5]
const sortNums = sort(nums)
console.log(nums, sortNums)