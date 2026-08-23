let products = [
  {name: "Laptop", price: 60000, inStock: true},
  {name: "Mouse", price: 1000, inStock: true},
  {name: "Keyboard", price: 2500, inStock: false},
  {name: "Monitor", price: 15000, inStock: true},
  {name: "Headphones", price: 3000, inStock: true}
]

let totalPrice = products.filter((x) => x.inStock === true)
.filter((x)=>x.price>2000)
.reduce((a,b)=>(a+b.price),0);

console.log(totalPrice);