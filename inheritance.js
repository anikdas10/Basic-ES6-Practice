

class Vechale{
    constructor(name,price){
        this.name = name;
        this.price=price;
    }
    move(){
        console.log("Gari Chole na Chole na Chole na re");
    }
}

class Bus extends Vechale{
    constructor(name, price , seat, ticetPrice){
        super(name, price);
        this.seat = seat;
        this.ticetPrice = ticetPrice;
    }

}

class Truck extends Vechale{
    constructor(name, price ,load){
        super(name,price);
        this.load = load;
    }
}

const veachle = new Vechale('Byke',"250000");
const bus = new Bus('Bus',"2500000",40,550);
const truck = new Truck('Truck',"2000000", "100 Ton");
console.log(veachle);
console.log(bus);
console.log(truck);