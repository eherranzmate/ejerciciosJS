const baseUrl = 'https://api.nationalize.io?name=';


function queryApi() {
    const input$$ = document.querySelector('input');
    fetch(baseUrl + input$$.value)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        console.log(myJson);
    });

}

const btn$$ = document.querySelector('button');
btn$$.addEventListener('click', queryApi);
