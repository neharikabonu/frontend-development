async function getUserNames() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`Something went wrong: ${response.status}`)
    }

    let data = await response.json();

    let names = data.map(user => user.name);

    console.log(names);
  }

  catch(error) {
    console.log(error.message);
  }
}

getUserNames();