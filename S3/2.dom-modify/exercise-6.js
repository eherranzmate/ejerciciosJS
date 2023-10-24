let newList$$ = document.createElement('ul');

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

for (let app of apps) {
    const liApp$$ = document.createElement('li')
    liApp$$.textContent = app;
    newList$$.appendChild(liApp$$)
    
}

document.body.appendChild(newList$$);

    


