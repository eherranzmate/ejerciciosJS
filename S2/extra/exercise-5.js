function rollDice(sides){
    return Math.floor( Math.random() * (sides)) + 1;
}

console.log (rollDice(6));
console.log (rollDice(2));
console.log (rollDice(1));