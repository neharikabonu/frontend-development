let numbers = [5, 12, 8, 21, 30, 7, 18, 3];

let result = numbers.filter(x => x>10)
                    .map(x => x*x)
                    .reduce((a,b)=>(a+b),0);

console.log(result);