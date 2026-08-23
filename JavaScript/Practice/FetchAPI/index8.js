const product = {
  title: "Laptop",
  price: 55000,
  category: "Electronics"
}

async function addProduct(params) {
  
  try {

    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {

      method: "POST",

      headers: {"Content-Type" : "application/json"},

      body: JSON.stringify(params)

    });
    if(!response.ok) {
      throw new Error (`HTTP error: ${response.status}`);
    }

    let data = await response.json();

    console.log(data.id);
    console.log(data.title);

  } catch(error) {
    console.log(error.message);
  }
}

addProduct(product);