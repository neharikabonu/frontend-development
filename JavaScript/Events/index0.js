const element = document.getElementById("first");

// element.onclick = function handleClick() {
//   element.textContent = "Learning JavaScript";
// } not recommended as it would be overridden by the next function

//adding event listener is the best approach

element.addEventListener('click', () => {
  element.textContent = "Learning JavaScript";
});

element.addEventListener('dblclick', () => {
  element.style.backgroundColor = "black";
  element.style.color = "white";
});

//mouseenter : changes when hovered by the mouse cursor

//mouseleave : changes when the mouse cursor leaves the content



