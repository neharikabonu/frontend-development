// https://api.github.com/users

// const p1 = fetch("https://api.github.com/users");


//asynchronous = json
// p1.then((response) => {
//   console.log(response.json());
// });

// const result = p1.then((response) => {
//   return response.json();
// });

// result.then((response) => {
//   console.log(response);
// });

//chaining
//fetch -> .then()

//json: javascript object notation

//consuming the promise
// fetch("https://api.github.com/users")
// .then((response) => {

//   if (!response.ok) {
//     throw new Error ("Data not present in the server");
//   }
//   return response.json()
// })
// .then((result) => {

//   const parent = document.getElementById("first");

//   for (let i = 0; i < result.length; i++) {
//   const image = document.createElement('img');
//   image.src = result[i].avatar_url;
//   image.style.height = "50px";
//   image.style.width = "50px";
//   parent.append(image);
//   }
// })
// .catch((error) => {
//   const parent = document.getElementById("first");
//   parent.textContent = error.message;
// })

//rejected(no response) -> internet down, server down, dns down
//fulfilled(any response) -> everything else

//creation of promise

// const promise1 = new Promise((resolve, reject) => {
//   //resolve - fulfilled
// })

