const products = [
    {id:1 , name:"lenovo", price: 65000},
    {id:2 , name:"Asus", price: 85000},
    {id:3 , name:"HP", price: 105000},
    {id:4 , name:"Apple", price: 165000}
]
// similar

class Product{
    country = "Bangladesh";
    constructor(name){
        this.name = name;
    }
    speak(talk){
       console.log(`Talking about ${talk}`); 
    }
}

class Teacher{
    constructor(name , subject){
        this.name = name;
        this.subject = subject

    }
    lecture(){
      console.log("Sir is teaching Math");  
    }
}

const tapan = new Teacher("Tapan Sir", "Physics");
console.log(tapan);

const rashid = new Teacher("Rahid Sir", "English");
console.log(rashid);