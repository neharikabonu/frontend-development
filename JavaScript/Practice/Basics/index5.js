let marks = Number(prompt("Enter your marks: "));

if (marks >= 90 && marks < 100) {
  console.log("A");
} else if (marks >= 80 && marks < 90) {
  console.log("B");
} else if (marks >= 70 && marks < 80) {
  console.log("C");
} else if (marks >= 60 && marks < 70) {
  console.log("D");
} else {
  console.log("F");
}