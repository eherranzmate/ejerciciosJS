const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(country of countries){
    const div$$ = document.createElement('div');
    let title$$ = document.createElement('h4');
    let img$$ = document.createElement('img');
    title$$.textContent = country.title;
    img$$.src = country.imgUrl;
    div$$.appendChild(title$$);
    div$$.appendChild(img$$);
    document.body.appendChild(div$$);      
}

function removeLast (){
    let divRemove$$ = document.querySelectorAll('div')
    console.log(divRemove$$)
    divRemove$$ [divRemove$$.length -1].remove();
}


const btn$$ = document.querySelector('button');
btn$$.addEventListener('click', removeLast);

// Mejor hacerlo con :last-child.