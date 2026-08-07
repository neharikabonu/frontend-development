let str = `Hello`;

console.log(str)
console.log(`the string is ${str}`) //doesnt work with quotes

console.log(str.length)

console.log(str[10]); //undefined output

console.log(str.charAt(10)); // " "

console.log(str.at(-1)) //negative indexing for reverse

console.log(str.toUpperCase());

console.log(str.toLowerCase());

let str1 = "   Hello World   ";

console.log(str1.trim());

let str2 = "apple,banana,mango";

console.log(str2.split(","));