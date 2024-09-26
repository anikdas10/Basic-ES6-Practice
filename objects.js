const products = [
    {id:1 , name:"lenovo", price: 65000},
    {id:2 , name:"Asus", price: 85000},
    {id:3 , name:"HP", price: 105000},
    {id:4 , name:"Apple", price: 165000}
]

const names = products.map(product => product.name);
const price = products.map(product => product.price);
// console.log(names);
// console.log(price);
products.forEach(element => {
    console.log( element.price);
});

const expensive = products.filter(p => p.price > 70000);
// console.log(expensive);

const affordabel = products.find(p => p.price<=70000)
console.log(affordabel);