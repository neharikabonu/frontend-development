// callback function

// function greet() {
//   console.log("Hello")
// }

// function meet() {
//   console.log("Nice to meet you")
// }

// meet(greet()) // f(g(x))

function greet(callback) {
  console.log("Hello");
  callback();
}

function meet() {
  console.log("Nice to meet you");
}

function welcome() {
  console.log("Welcome");
}

greet(meet);

greet(welcome)

// meet -> greet