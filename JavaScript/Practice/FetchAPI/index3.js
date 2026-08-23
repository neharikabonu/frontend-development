fetch("https://jsonplaceholder.typicode.com/invalid")
    .then(response => {
      if (!response.ok) {
        throw new Error (`Something went wrong: ", ${response.status}`);
      }
      return response.json();
    })
    .then (data => console.log(data))
    .catch (error => console.log(`Something went wrong: ${error.message}`));