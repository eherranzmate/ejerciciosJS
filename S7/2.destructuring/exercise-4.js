const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };

let {name : carName, itv} = car;

let [itv1, itv2, itv3] = itv;

console.log(carName, itv);
console.log(itv1, itv2, itv3);