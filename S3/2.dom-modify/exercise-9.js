let Class$$ = document.querySelectorAll('.fn-insert-here');
for (let noClass of Class$$) {
    let newPs$$ = document.createElement('p');
    newPs$$.textContent = 'Voy dentro!'
    noClass.appendChild(newPs$$)

}

