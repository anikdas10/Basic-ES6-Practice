// data access

const data = [{id:1, name:'Abul', address:"kochukhet"}]
console.log(data[0].address);

const products = {
    count : 5000,
    data:[
        { id:1, name:"lenovo Laptop", price:65000 },
        { id:2, name:"Macbook", price:500000 },
    ]
}

console.log(products.data[1].price);


const users = {
    id:5001,
    name:"Shoriful Raj",
    address:{
        street:{
            first:"54/1 uttor side",
            second:"Poribag er goli",
            third:"no dorai"
        },
        city:"Dhaka"
    }
}

const users2 = {
    id: 5002,
    name :"Pori bibir majar",
    address:{
      city:"Chittagong",
      country:"Bangladesh"  
    }
}
console.log(users.address.street?.second);
console.log(users2.address.street?.second);