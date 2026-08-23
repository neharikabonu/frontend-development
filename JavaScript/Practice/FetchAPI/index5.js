async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")

    if(!response.ok) {
      throw new Error("E")
    }

    let data = await response.json();

    let usersData = data.filter(user => user.id > 5)
                      .map(user => user.name);
    
    console.log(usersData);
  }
  catch(error) {
    console.log(error.message);
  }
}

getUsers();