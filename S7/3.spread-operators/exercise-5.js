const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

let colorsCopy = [...colors];
colorsCopy.splice(2,1);

console.log(colorsCopy);