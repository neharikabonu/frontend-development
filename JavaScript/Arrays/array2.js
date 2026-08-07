//for of
let arr = [1,2,3,4,5]
for (let num of arr) {
  console.log(num)
}

console.log()

//for each

arr.forEach(function(num) {
  console.log(num)
}) 

console.log()

//arrow function

arr.forEach(num => console.log(num))
console.log()

//for-each different way to print

arr.forEach(function(x, i) { // i = index
  console.log(i, x)
})
console.log()

//maps Creates a new array by transforming every element.
// Original array stays unchanged.

let square = arr.map(function(x) {
  return x * x;
})

console.log(square)
console.log()

//arrow functions

let result = arr.map(x => x * x)
console.log(result)
console.log()

let even = arr.filter(x => x % 2 == 0)
console.log(even)
console.log()

//reduce

let numbers = [1,2,3,4,5]

let sum = 0;
sum = numbers.reduce(function(total, x) {
  return total + x;
})

console.log(sum)

//arrow
let sum1 = numbers.reduce((a,b) => a+b, 0)
console.log(sum1)

let min = numbers.reduce((a,b) => a < b ? a : b )
console.log(min)

//find
let find_ = numbers.find(x => x > 2)
console.log(find_)

//some -> return true if at least one element satisfies the condition

//every() -> all elements must satisfy the condition