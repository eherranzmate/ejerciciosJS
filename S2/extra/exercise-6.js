function swap(array, index, secondIndex){
    let param = array[index];
    array[index] = array[secondIndex];
    array[secondIndex] = param;
    
return array;
}

array =['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

swap(array, 0,3);
console.log(array)