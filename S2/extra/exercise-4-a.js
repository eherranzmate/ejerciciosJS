function findArrayIndex(array, text) {
    for(i= 0; i < array.length; i++) {
        if (array[i] === text){
            return i;
        }
    } 
}


let bugs =['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

bugs = findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Salamandra' )
console.log (bugs)
