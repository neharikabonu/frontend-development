let user = {
    name: "Neharika",
    age: 22
};

let { name, age, city = "Unknown" } = user;

console.log(name);
console.log(age);
console.log(city);