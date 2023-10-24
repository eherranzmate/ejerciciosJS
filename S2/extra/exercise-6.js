function swap(wordList, index, secondIndex){
    let exchange = wordList[index];
    wordList[index] = wordList[secondIndex];
    wordList[secondIndex] = exchange;
    
    return wordList;
}

let players =['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

;
console.log(swap(players, 1,3))