let newList$$ = document.createElement('ul');
document.body.appendChild(newList$$);

const arrayul$$ = document.querySelector("ul")

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

for (let app of apps) {
    const liApp$$ = document.createElement('li')
    arrayul$$.appendChild(liApp$$)
    liApp$$.textContent = app
}

    


