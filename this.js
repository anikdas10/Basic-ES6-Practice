class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`My name is ${this.name} . My current age is ${this.age}`);
    }
    activity(){
      this.sleep()  
    }
}

const kodom = new Person("Kodom Ali",21)
// console.log(kodom);
kodom.sleep()