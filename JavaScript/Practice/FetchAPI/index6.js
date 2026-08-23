
async function addUser() {

  try {
    let userData = {
      name: "Rahul",
      username: "rahul123",
      email: "rahul@gmail.com"
    }

    const response = await fetch("https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(userData)
      });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
  } catch(error) {
    console.log(error.message);
  }
}

addUser();