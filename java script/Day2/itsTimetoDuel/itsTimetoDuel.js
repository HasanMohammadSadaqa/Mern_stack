class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost); // I'm telling Unit: go to Card and inherit name, and cost from there. ps: I need to pass them through my original constructor aswell, always.
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power;
        } else {
            throw new Error("Target must be a Unit!")
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit) {
            this.stat == "power" ? target.power += this.magnitude : target.res += this.magnitude;
        } else {
            throw new Error("Target must be a Unit!")
        }
    }
}


const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", +3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", +2);
// console.log(blackBeltNinja);
// console.log(redBeltNinja);
// console.log(hardAlgorithm);
// console.log(unhandledPromiseRejection);

console.log(hardAlgorithm);
hardAlgorithm.play(redBeltNinja);
console.log(redBeltNinja);

console.log(blackBeltNinja.res)
redBeltNinja.attack(blackBeltNinja);
console.log(blackBeltNinja.res);

console.log(pairProgramming);
console.log(redBeltNinja.power);
pairProgramming.play(redBeltNinja);
console.log(redBeltNinja.power);