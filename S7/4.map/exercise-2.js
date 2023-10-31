const users = [
    {id:1, name: 'Abel'}, 
    {id:2, name: 'Julia'},
    {id:3, name: 'Pedro'}, 
    {id:4, name: 'Amanda'}
];


const namesList = users.map(function(user) {
    if(user.name.charAt(0) === 'A') {
        user.name = 'Anacleto';
    }
    return user.name;
})


console.log(namesList);


