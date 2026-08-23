async function getUserPosts(params) {
  try {

    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params}`);

    if(!response.ok) {
      throw new Error(response.status);
    }

    let data = await response.json();

    console.log(data.length);

  } catch(error) {
    console.log(error.message);
  }
}

getUserPosts(3);