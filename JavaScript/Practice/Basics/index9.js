let num = 29;

if (num <= 0 || num === 1) {
  console.log("Nor prime nor composite");
}

let isPrime = true;
for (let i = 2; i * i <= 29; i++) {
  if (num % i === 0) {
    isPrime = false;
  } 
}

if (isPrime) {
  console.log("Prime");
} else {
  console.log("Not Prime");
}