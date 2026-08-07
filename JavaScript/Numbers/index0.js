let a = 12;
console.log(a.toString())
console.log(typeof a)
console.log(typeof a.toString())

let b = 123.4567
console.log(b)
console.log(b.toFixed(1))

console.log(b.toExponential(2))
console.log(b.toPrecision(2))


let c = 12;
console.log(c.toFixed(5)) //same for precision

let d = "123ab1c23abc" //only gets first sequence of numbers
console.log(parseInt(d))

console.log(Number.MAX_VALUE);

console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.EPSILON);

let result = (0.1 + 0.2).toFixed(2);
console.log(result);

let num = 5e3;
console.log(num); //5000 

let num = 5e-3;
console.log(num); //0.005