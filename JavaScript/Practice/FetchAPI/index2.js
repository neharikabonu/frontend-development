fetch("https://jsonplaceholder.typicode.com/users")
  .then (response => response.json())
  .then (data => {
    let namesWithL = data.filter(user => user.name.startsWith("L"))
  .map(user => user.name);
  console.log(namesWithL);
  })
