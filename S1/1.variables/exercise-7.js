let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000,
 finalPrice: 30000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 
70000, finalPrice: 32000};

globalBasePrice = 25000;

car1.finalPrice = car1.basePrice + globalBasePrice;
car1.finalPrice = car1.basePrice + globalBasePrice;

console.log(car1);
console.log(car2);

