function findArrayIndex(wordList, text) {
    for(i= 0; i < wordList.length; i++) {
        if (wordList[i] === text){
            return i;
        }
    } 
}



let bugs =['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

console.log(findArrayIndex(bugs, 'Mosquito'));