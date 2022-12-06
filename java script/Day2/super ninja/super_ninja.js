class Ninja {
    constructor(name){
        this.name= name;
        this.health= 0;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name)
    }

    showStats = () => console.log("Name: "+this.name,"speed: "+this.speed, "strength "+this.strength, "health: "+this.health);

    drinkSake = () => console.log(this.health +=10);
}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name) {
        super(name)
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom = 10;
    }
        //  speakWisdom =() => {super.drinkSake()};
        speakWisdom() {
            // var x = super.drinkSake();
            return this.drinkSake();
        }
}

const superSensei = new Sensei("Hasan Sadaqa");
superSensei.speakWisdom();
superSensei.showStats();
superSensei.wisdom;
