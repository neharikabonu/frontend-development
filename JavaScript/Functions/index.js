function greet() { //stores the reference
  console.log("Hello, World!")
}

//function calling

function sum(a, b, c = 0, d = 0) { //parameters-default values
  console.log(a+b+c+d)
}

// sum(3,4) //arguments
// sum(3,4,5)
// sum(3,4,5,6)
// greet(); 

//more flexible way of writing the function for parameters -> use rest ... operator (it catches values into array)

function calculateSum(...num) { //it creates array of the arguments passed into the function calling
  let sum = 0;

  for (let n of num) {
    sum += n;
  }

  console.log(sum)
}

calculateSum(1,2,3,4,5,6,4,2,4)

let arr = [1,2,3,4,5]

