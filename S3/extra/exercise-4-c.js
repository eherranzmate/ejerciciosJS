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
    let btn$$ = document.createElement('button')
    btn$$.textContent = 'Remove';
    title$$.textContent = country.title;
    img$$.src = country.imgUrl;
    div$$.appendChild(title$$);
    div$$.appendChild(img$$);
    div$$.appendChild(btn$$);
    document.body.appendChild(div$$); 
    
    btn$$.addEventListener('click', function(){
        div$$.remove();
    })
}

