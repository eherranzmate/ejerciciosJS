const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


let input$$ = document.querySelector('[data-function="toFilterStreamers"]');
input$$.addEventListener('input', findStreamers);

function findStreamers() {
    let streamer = streamers.filter(streamer => 
        streamer.name.includes(this.value));
        console.log(streamer);
}



