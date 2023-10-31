const countries = ['Japón', 'Nicaragua', 'Suiza', 
'Australia', 'Venezuela'];

let list$$ = document.createElement('ul');
 
for(country of countries) {
    let elements$$ = document.createElement('li');
    elements$$.textContent = country; 
    list$$.appendChild(elements$$);
}
document.body.appendChild(list$$);




console.log(list$$)