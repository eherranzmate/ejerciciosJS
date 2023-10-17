function rollDice(max){
    return Math.floor( Math.random() * (max - 1)) + 1;
}

console.log (rollDice(6));
console.log (rollDice(2));
console.log (rollDice(1));