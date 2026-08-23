//session storage

let settings = {
  theme: "Dark",
  language: "English"
}

sessionStorage.setItem("settings", JSON.stringify(settings));

let data = sessionStorage.getItem("settings");

let settings1 = JSON.parse(data);

console.log(settings1.theme, settings1.language);