const child1 = document.getElementById("child1");

// child1.addEventListener('click', () => {
//   child1.textContent = "I am clicked!!"
//   child1.style.justifyContent = "center";
//   child1.style.textAlign = "center";
// }); 

const parent = document.getElementById("parent"); //returns a collection

for (let child of parent.children) {
  child.addEventListener('click', () => {
    child.textContent = "I am clicked!!";
  })
}

