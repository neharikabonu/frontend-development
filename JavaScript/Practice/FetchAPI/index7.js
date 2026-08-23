const userData = {
  name: "Neharika",
  username: "neharika123",
  email: "neharika@gmail.com"
}

async function addUser(parameter) {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(parameter)
    });

    if (!response.ok) {
      throw new Error (response.status);
    }

    let data = await response.json();

    console.log(data.id);
  }

  catch(error) {
    console.log(error.message);
  }
}

addUser(userData);