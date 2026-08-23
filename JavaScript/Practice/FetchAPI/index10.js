async function getPosts(userId) {
  try {

    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    if(!response.ok) {
      console.log(response.status);
    }

    let data = await response.json();

    let result = data.filter(post => post.id > 15);

    console.log(result.length);

  } catch(error) {
    console.log(error.message);
  }
}

getPosts(3);