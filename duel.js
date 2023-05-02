class Unit{
    constructor(name,cost,power,resilience){
        this.name = name
        this.cost= cost;
        this.power = power;
        this.resilience = resilience;
    }
    attack(target){
        target.resilience -= 1
    }
} 

class Effect{
    constructor(name,cost, stat,magnitude){
        this.name = name
        this.cost = cost
        this.magnitude = magnitude
        this.stat = stat
    }
    use(target){
        target.stat = +this.magnitude
    }
}

const Red = new Unit("Red Belt",3,3,4)
console.log(Red)

const Black = new Unit("Black Belt",4,5,4)
console.log(Black)

const HardAlgo = new Effect("hard algo",2,"recilience", +3)
console.log(HardAlgo)

HardAlgo.use(Red)
console.log(Red)