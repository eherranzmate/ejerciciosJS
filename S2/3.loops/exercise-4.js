const toys = [
{id: 5, name: 'Buzz MyYear'}, 
{id: 11, name: 'Action Woman'}, 
{id: 23, name: 'Barbie Man'}, 
{id: 40, name: 'El gato con Guantes'},
{id: 40, name: 'El gato felix'}
];




for(let toy of toys) {
   if(toy.name.includes ('gato')){
    toys.splice(toys, 1);
    toy --;
   }
}

console.log(toys)

for(let i = 0; i < toys.length; i++) {
   if (toys[i].name.includes('gato')){
      toys.splice(i, 1);
      i--;
   }
}

console.log(toys)