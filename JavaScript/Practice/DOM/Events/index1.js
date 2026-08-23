let buttons = document.querySelectorAll(".btn");

for (let button of buttons) {
  button.addEventListener('click', (event) =>  {
  event.target.textContent = "Clicked!";
});
}