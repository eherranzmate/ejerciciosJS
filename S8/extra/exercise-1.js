fetch(`https://breakingbadapi.com/`)
    .then ((response) => {
        return response.json();
    })
    .then ((myJson) => {
        console.log(myJson);
    })