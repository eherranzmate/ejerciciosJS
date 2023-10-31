// function getCharacters () {
//     fetch('https://rickandmortyapi.com/api/character')
//     .then(res => res.json())
//     .then(characters => console.log(characters));
// }

// getCharacters()


async function getCharacters (){
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const myJson = await response.json();
    console.log(myJson);
}

getCharacters();