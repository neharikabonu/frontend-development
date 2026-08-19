setInterval(()=> {
  const div = document.querySelector('div');
let time = new Date();
div.textContent = time.toLocaleTimeString();
},1000)
