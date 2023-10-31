const baseUrl = 'https://api.nationalize.io?name=';


function queryApi() {
    const input$$ = document.querySelector('input');
    fetch(baseUrl + input$$.value)
    .then((response) => {
        return response.json();
    })
    .then((person) => {
        createP(person);
    });

}


function createP (person) {
    const p$$ = document.createElement('p');
    const deletebtn$$ = document.createElement('button');
    deletebtn$$.textContent = 'X';
    let text = `El nombre ${person.name}`;

    for(country of person.country){
        const percentage = country.probability * 100;
        text += ` tiene un ${percentage} por ciento de ser de ${country.country_id}`;
    }        
    
    p$$.textContent = text;
    document.body.appendChild(p$$);

    deletebtn$$.addEventListener('click', function(){
        p$$.remove();
        deletebtn$$.remove();
    })

    document.body.appendChild(deletebtn$$);

};


const btn$$ = document.querySelector('button');
btn$$.addEventListener('click', queryApi);




