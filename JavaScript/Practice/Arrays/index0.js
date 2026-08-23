let numbers = [12, 5, 8, 20, 3, 15, 7];

//largest
let largest = numbers[0];

for (let num of numbers) {
  if (num > largest) {
    largest = num;
  }
}
console.log("Largest: ", largest);

//smallest
let smallest = numbers[0];

for (let num of numbers) {
  if (num < smallest) {
    smallest = num;
  }
}
console.log("Smallest: ", smallest);

//sum
let sum = 0;

for (let num of numbers) {
  sum += num;
}
console.log("Sum: ",sum);

//average

console.log("Average: ", sum/numbers.length);