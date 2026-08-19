//event bubbling

// const grandparent = document.getElementById("grandparent")
// grandparent.addEventListener('click', (event)=>{
//   event.target.textContent = "Grand Parent is clicked";
//   event.stopPropagation();
// })

// const parent = document.getElementById("parent")
// parent.addEventListener('click', (event)=>{
//   event.target.textContent = "Parent is clicked";
//   event.stopPropagation();
// })

// const child = document.getElementById("child")
// child.addEventListener('click', (event)=>{
//   event.target.textContent = "Child is clicked";
//   event.stopPropagation();
// })

// const grandparent = document.getElementById("grandparent");

// grandparent.addEventListener("click", (event) => {
//     event.target.textContent = "I am clicked!";
// });

const grandparent = document.getElementById("grandparent");

function handleClick(event) {
  event.target.textContent = "I am clicked!";
  grandparent.removeEventListener('click', handleClick);
}

grandparent.addEventListener('click', handleClick);

grandparent.addEventListener("click",(event)=>  {
  event.target.textContent = "I am clicked!";
 },
  { once: true }
);