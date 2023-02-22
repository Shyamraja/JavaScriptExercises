const characters = [
    {
        name: 'Luke Boss',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
        isMarried: false
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
        isMarried: true
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
        isMarried: false
    },
]

//check if particular character 1 is married or not
console.log(characters[0]?.isMarried);
  console.log();


//display the character if  married 
const isMarried = characters.filter((character) => character?.isMarried)
console.log(isMarried);


//display the character names if not married
const isnotMarried = characters.filter((character) => character?.isMarried == false).map((character) => character.name)
console.log(isnotMarried);



//display the character names, genders and heights if not married
const isnoMarried = characters.filter((character) => character?.isMarried == false).map((character) => (`I am ${character.name}, I am unmarried ${character.gender} and my height is ${character.height}`))
console.log(isnoMarried);


//display the character names, genders and eye colors  if not married ,height less than 175 and weight more than 50
const isno_Married = characters.filter((character) => (character?.isMarried == false && character.height < 175 && character.mass > 50))
.map((character) => (`I am ${character.name}, I am unmarried ${character.gender} and my eye is ${character.eye_color} color`))
console.log(isno_Married);


//print the chharacter that have mass less than 100
let newCharacters = [];
for (i =0; i<=characters.length; i++){
    if(characters.mass > 100){
        newCharacters.push(characters)
    }
}
console.log(...characters);

//show the character names that have age less than 
let filteredNames =characters.filter((character)=> character.mass < 100).map((character)=> character.name)
console.log(filteredNames);