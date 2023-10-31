fetch('https://api.agify.io?name=michael')
    .then ((response) => {
        return response.json();
    })
    .then ((myJson) => {
        console.log(myJson);
    })


// fetch().then(res => res.json()).then(resDasta => {
// console.log(resData);
// });