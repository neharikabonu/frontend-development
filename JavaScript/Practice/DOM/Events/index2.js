const element = document.getElementById("name");

element.addEventListener('input', (event) => {
  const output = document.getElementById("output");

  output.textContent = event.target.value;
})