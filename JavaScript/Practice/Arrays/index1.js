let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];

for (let num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

console.log(evenNumbers)

