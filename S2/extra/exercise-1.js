const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let newCategories = [];

for(let movie of movies) { 
    console.log(movie)
    for(let category of movie.categories) {
        if (!newCategories.includes(category)) {
            newCategories.push(category);
        }
    }
 }


console.log(newCategories)
