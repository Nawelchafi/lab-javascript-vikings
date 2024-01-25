// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength   
     }
     attack() {
      return this.strength
     } 
      receiveDamage(damage){
     this.health -= damage;
    }

}

// Viking
class Viking extends Soldier {
    constructor(character_name,health,strength) {
        super(character_name,health,strength);
        this.character_name = character_name ;
    }
    receiveDamage(damage) {
    this.health -= damage;
//if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
if(this.health>damage){
console.log(`${this.character_name} has received DAMAGE points of ${this.damage}`)
    }
else  console.log(`${this.character_name} has died in act of combat`)
}
    battleCry(){
       console.log("Odin Owns You All!") 
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
    this.health -= damage;
    if(this.health>damage){
console.log(`saxon has received DAMAGE points of ${this.damage}`)
    }
else  console.log(` A saxon has died in act of combat`)
}
}

// War
class War {}
