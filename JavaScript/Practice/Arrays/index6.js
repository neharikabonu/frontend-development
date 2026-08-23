//find, some, every

let numbers = [4, 8, 15, 16, 23, 42];

let result1 = numbers.find(x => x > 20);
console.log(result1);

let result2 = numbers.some(x => x > 20);
console.log(result2);

let result3 = numbers.every(x => x > 0);
console.log(result3);