function sum(...numbers) {
  return numbers.reduce((a,b)=>(a+b),0);
}

console.log(sum(12,1,3,6,4));

function multiply(...numbers) {
  return numbers.reduce((a,b)=>(a*b),1);
}

console.log(multiply(12,1,3,6,4));