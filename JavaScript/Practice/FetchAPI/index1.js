fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then (data => {
    let names = data.map(user => user.name);
    console.log(names);
  })