const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];



let btn$$ = document.querySelector('[data-function="toShowFilterStreamers"]');
btn$$.addEventListener('click', findStreamers);

function findStreamers() {
    let input$$ = document.querySelector('[data-function="toFilterStreamers"]');
    let streamer = streamers.filter(streamer => 
        streamer.name.includes(input$$.value));
        console.log(streamer);
}