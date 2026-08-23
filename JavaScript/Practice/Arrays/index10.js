let user = {
  name: "Neharika",
  age: 22,
  role: "Developer"
};

let updatedUser = {...user};

updatedUser.age = 23;
updatedUser.city = "Vijayawada";
console.log(updatedUser);
console.log(user);