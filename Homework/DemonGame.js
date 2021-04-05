// DEMON VS DEMONSLAYER GAME!

const demonSlayer = {
    damage: 0,
    health: 120
}


const theDemon = {
    health: 200,
    damage: 0
}

// create slayer's attack variations
const slayerAttacks = {
    dropKick: ("Drop Kick ", Math.round(Math.random()*25)),
    falconPunch: ("Incoming Falcon punch", (Math.round(Math.random()*50))),
    superSmash: ("SUPER SMASH", Math.round(Math.random()*65))
} 

// create demon's attack variations
const demonAttack = {
    fireBreath: ("Fire Breath", Math.round(Math.random()*75)),
    superClaw: ("Super Claw", Math.round(Math.random()*30)),
}

//make slayer's attacks on the demon random
function randomslayerSquareUp(slayerAttacks){
 const attackKeys = Object.keys(slayerAttacks);
  return "Slayer hit him with the " + object(attackKeys.length * Math.random())
}

// make demons attack the slayers random
