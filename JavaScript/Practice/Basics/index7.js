let num = 12345;
let rev = 0;

while (num != 0) {
  let digit = Math.floor(num % 10);
  rev = rev * 10 + digit;
  num = Math.floor(num / 10);
}

console.log(rev)