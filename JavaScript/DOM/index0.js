const newElement = document.createElement("h2");

newElement.textContent = "Creating using JavaScript";

newElement.id = "second";

const element = document.getElementById("first");

element.after(newElement);

// element.before(newElement);

const newElement0 = document.createElement("h3");

newElement0.textContent = "Today's date is 18th August";
newElement0.id = "third";
// newElement0.className = ""
newElement0.classList.add("diwali");

newElement.after(newElement0);

newElement0.style.backgroundColor = "pink";
newElement0.style.fontSize = "20px";


// const list1 = document.createElement("li");
// list1.textContent = "Milk";

// const list2 = document.createElement("li");
// list2.textContent = "Eggs";

// const list3 = document.createElement("li");
// list3.textContent = "Choco";

// unorderElement.append(list1);
// unorderElement.append(list2);
// unorderElement.prepend(list3); //updates at the first

const unorderElement = document.getElementById("listing");

const arr = ["Milk", "Choco", "Eggs", "Paneer"];

const fragment = document.createDocumentFragment();

//using fragment for optimized solution

for (let item of arr) {
  const list = document.createElement("li");
  list.textContent = item;
  fragment.append(list);
}

unorderElement.append(fragment);

//unoptimized
// for (let item of arr) {
//   const list = document.createElement("li");
//   list.textContent = item;
//   unorderElement.append(list);
// }

// use fragment for this

//for deleting

const s1 = document.getElementById("first");
s1.remove();