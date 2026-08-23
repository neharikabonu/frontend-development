let elements = document.querySelectorAll(".skill");

for (let element of elements) {
  let text = element.textContent;
  element.textContent = `I know ${text}`
}