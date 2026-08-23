let student1 = {
  name: "Neharika",
  age: 22,
  course: "CSE"
}

localStorage.setItem("student1", JSON.stringify(student1));

let data = localStorage.getItem("student1");

let s1 = JSON.parse(data);

console.log(s1.name, s1.age, s1.course);