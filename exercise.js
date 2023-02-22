const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
]

//print the chharacter that have mass less than 100
let newCharacters = [];
for (i =0; i<=characters.length; i++){
    if(characters.mass > 100){
        newCharacters.push(characters)
    }
}
console.log(...characters);

//filter the character names that have age less than 
let filteredNames =characters.filter((character)=> character.mass < 100).map((character)=> character.name)
console.log(filteredNames);