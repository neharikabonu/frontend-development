// const user = {
//   name: "Neharika",
//   age: 22,
//   email: "bonuneharika@gmail.com",
//   balance: 2000
// }

// console.log(user)

// console.log(Object.keys(user))

// console.log(Object.values(user))

// console.log(Object.entries(user))

//keys-values
// for (let x in user) {
  // console.log(x +": "+ user[x])
//   console.log(`${x}: ${user[x]}`)
// }

const user = {
  name: "Neharika",
  age: 22,
  email: "bonuneharika@gmail.com",
  balance: 2000
}

// const name = user.name;
// const age = user.age;

// console.log(name, age)

// const {name, balance, age} = user;

// console.log(name,age, balance)

//for of

// for(let keys of Object.keys(user)) {
//   console.log(keys, user[keys])
// }

const user2 = {...user} //creates independent copy -> shallow copy

const user3 = structuredClone(user) 
// deep copy

