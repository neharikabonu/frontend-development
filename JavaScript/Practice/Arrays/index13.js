let colors = ["red", "green", "blue", "yellow"];

// let [first, second, third, fourth] = colors;

// console.log(first, second, third, fourth);

let [first, second, ...remaining] = colors;

console.log(first,second, remaining);