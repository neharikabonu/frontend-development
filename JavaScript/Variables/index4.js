var a = 10;

if (true) {
  var a = 20;
}

console.log(a);

//can be accessed even after scope, doesn't respect scope (block)

function func() {
  var c = 20;
}

// console.log(c);

//respects functional scope


