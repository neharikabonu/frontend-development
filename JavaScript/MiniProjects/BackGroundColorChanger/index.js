const parent = document.getElementById("parent");

parent.addEventListener('click', (event) => {
  document.body.style.backgroundColor = event.target.id;
})