const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

let {name : animalName, race} = animalFunction();

console.log(animalName, race);
