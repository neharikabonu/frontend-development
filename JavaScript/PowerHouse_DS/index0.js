//forEach

// const arr = [1,2,3,4,5];

//callback function
// arr.forEach(x => {
//   console.log(x);
// });

// arr.forEach((x, i) => {
//   console.log(x, i, arr);
// });

//filter

// const filterArr = arr.filter((x => x > 2));

// console.log(filterArr);

//creating own methods

// arr.filtering = function(compare){
 //custom method
// Array.prototype.filtering = function(compare)
//   const result = [];
//     for(let num of this) {
//       if (compare(num)) {
//         result.push(num);
//       }
//     }

//     return result;
// }

// const ans = arr.filtering(x => x > 2);
// console.log(ans);

// const arr = [1,2,3,4,5];

//map
// const result = arr.map(x => x * 2);
// console.log(result);

//reduce

// const result = arr.reduce((initial, current)=>{
//   return initial + current;
// }, 0);

// console.log(result)

//Set

// const arr = [1,3,1,4,6,3,5,1,3,5];

// const set1 = new Set(arr);

// const set1 = new Set(1,2,3,4,5); not possible

// console.log(set1);

// Map

// const map1 = new Map([
//   ["name", "neharika"],
//   ["age", 22]
// ]);

// console.log(map1);