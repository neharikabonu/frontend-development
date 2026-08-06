//Primitive Datatypes
// these are immutable, which means the value cannot be manipulated
//number dtype

let a = 10;

console.log(a);

console.log(typeof a);

let b = 10.28;

console.log(b);

console.log(typeof b);

//string

let c = "Neharika"; //can also be written using ' '

console.log(c);

console.log(typeof a);

//boolean

let pwd = true;

console.log(pwd);

console.log(typeof pwd);

//undefined

let user; //when declared but not initialized, it is known as undefined

console.log(user);
console.log(typeof user);

// const a; can never be undefined, must initialize

//bigint;

let d = 123456787654367890987656789n;
console.log(d);
console.log(typeof d); //type is still number

//null

let weather = null; //when we intentionally doesn't want to initialize to indicate "no value" -> 

console.log(weather);
console.log(typeof weather); // o/p: object

//symbol; -> provides unique value 

const id1 = Symbol("id1");

console.log(id1); // o/p: Symbol(id1)

const id2 = Symbol("id1");

console.log(id1 == id2); //false even if values are same

//Non-Primitive Data Type

//array, object, function

//array

let arr = [10, 20, 11, 'Neha', true];

console.log(arr);
console.log(typeof arr);

//object -> key-value pairs

let obj1 = {
  name : "Neharika",
  age : 22,
  gender : "Female"
}

console.log(obj1);
console.log(typeof obj1); //object

// output: { name: 'Neharika', age: 22, gender: 'Female' }

//function datatype

//1. type 1
function greet() {
  console.log("Hello");
}

greet();

//2. Type 2

let s = function hello() {
  console.log("Hello, World!");
}

s();

console.log(typeof s)