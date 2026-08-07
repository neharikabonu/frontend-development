let arr = [2, 8, 6, 1, 0,3, 4]

console.log(arr)
arr.push(5)

console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(0)
console.log(arr)

arr.shift()
console.log(arr)

console.log(arr.slice(1,4))

arr.splice(5, 2, 5)

console.log(arr)

console.log(arr.includes(10))

console.log(arr.join(" "))

arr.sort((a, b) => (a - b))
console.log(arr)

arr.sort((a, b) => (b - a))
console.log(arr)