function findArrayIndex(wordList, text) {
    for(i= 0; i < wordList.length; i++) {
        if (wordList[i] === text){
            return i;
        }
    } 
}


function removeItem(wordList, text) {
      findArrayIndex(wordList, text);
      if (i > -1){
         wordList.splice(i,1);
        }

      return wordList;
}

let bugs =['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

console.log(removeItem(bugs, 'Salamandras'));