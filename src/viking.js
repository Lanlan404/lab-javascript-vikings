// Soldier
class Soldier {
  constructor(health, strength) {
    this.health= health;
    this.strength= strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage
  }
}

// Viking
  class Viking extends Soldier {
    constructor(name, health, strength) {
      super (health, strength);  
      this.name= name;    
    }
    attack() {
      super.attack()
      return this.strength;
   }
    receiveDamage (damage) {
       this.health -= damage;
       if (this.health > 0) {
         return `${this.name} has received ${damage} points of damage`
       }
       if (this.health <= 0) {
         return `${this.name} has died in act of combat`
       }
    }
    battleCry () {
       return `Odin Owns You All!`
    }
  }

// Saxon
class Saxon extends Soldier {
  attack() {
   super.attack()
   return this.strength
  }
  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    }
    if (this.health <= 0) {
      return `A Saxon has died in combat`
    }
 }
}

// War
class War {
  constructor() {
    this.vikingArmy=[];
    this.saxonArmy=[];
  };

  addViking(Viking) {
    this.vikingArmy.push(Viking)
  };

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
  };

  vikingAttack() {
     super.vikingAttack ()
     return Viking.strength;

     receiveDamage(Saxon) = this.vikingAttack ();
       if (Saxon receiveDamage <= 0) {
         this.saxonArmy.slice(Saxon);
       }
  }

  saxonAttack() {
    super.saxonAttack ()
     return Saxon.strength;

     receiveDamage(Viking) = this.saxonAttack ();
       if (Viking receiveDamage <= 0) {
         this.vikingArmy.slice(Viking);
       };
   }

  showStatus(){
    if (this.saxonArmy === []){
      return "Vikings have won the war of the century!"
    }
    if (this.vikingArmy === []){
      return "Saxons have fought for their lives and survived another day..."
    }
    else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
