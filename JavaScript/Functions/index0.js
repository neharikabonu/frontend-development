//store function into a variable

//cannot access the variable before initializing
//where as another way of function allows calling the function before even initializing -> hoisting

let calculateSum = function(...num) {
  let sum = 0;

  for (let n of num) {
    sum +=n;
  }

  return sum;
}

console.log(calculateSum(4,3,5,1,4,5))