const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 
'Toyota corola'];



let div$$ = document.querySelector('[data-function="printHere"]');
let list$$ = document.createElement('ul');
div$$.appendChild(list$$);


 
for(let car of cars) {
    let elements$$ = document.createElement('li');
    elements$$.textContent = car; 
    list$$.appendChild(elements$$);
}

