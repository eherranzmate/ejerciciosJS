const movies = [{name: "Your Name", durationInMinutes: 130},
{name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
{name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, 
{name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

let peliculaPequeña = []
let peliculaMediana = []
let peliculaGrande = []

for(let i = 0; i < movies.length; i++) {
if(movies[i].durationInMinutes > 200) {
    peliculaGrande.push(movies[i]);
} else if (movies[i].durationInMinutes >= 100) {
        peliculaMediana.push(movies[i]);
    } else {
        peliculaPequeña.push(movies[i]);
    }
}


console.log(peliculaGrande)
console.log(peliculaMediana)
console.log(peliculaPequeña)