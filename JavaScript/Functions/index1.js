// arrow function

let greet = () => {
  console.log("Hello")
}

greet()

let sum = (a,b) => a+b
console.log(sum(5,4))

let greeting = () => {
  let user = {
    name: "Neharika",
    age: 22
  }
  return user;
}

console.log(greeting())

//can also be written as

let greeting1 = () => {
  return {
    name: "Neharika",
    age: 22
  }
}

//can also be written as

let greeting2 = () =>({
    name: "Neharika",
    age: 22
  })


console.log(greeting2());
   
//IIFE -> Immediately Invoke Function -> always wrap the entire function with ()

(function hello() {
  console.log("Hello");
})(); //it immediaately invokes the function