//Find first non repeated string 
/*let string = "ahbliyuopkhcvshhafahdbdddghj";
function nonRep(string) {
    let countChar = {};

for (let i = 0; i < string.length; i++){
let char = string[i];
if (countChar[char]) {
    countChar[char]++;
} else {
    countChar[char] = 1;
}
}
for (let i = 0; i < string.length; i++){
    let char = string[i];
    if (countChar[char] === 1){
        return char;
    }
}
return null;
}
console.log(nonRep(string));
*/
//Another solution
/*
let string = "ahbliyuopkhcvshhafahdbdddghj";
let index = -1;
let countChar = {};
for (let i of string) {
   if (string.split(i).length - 1 === 1) {
        countChar = i;
        break;
    } else {
        index += 1;
   }
}
if (index === 1) {
    console.log("Can't find here");
} else {
    console.log(`The non repeating char is ${countChar}`);
}
*/
let string = "ahbwxyzliyuopkhcvshhafahdbdddghj";
const nonRepeating = function (string) 
{ 
    const charMap = new Map();
     for (const char of string) { 
        charMap.set(char, (charMap.get(char) || 0) + 1); 
             }
         for (const char of string) { 
            if (charMap.get(char) === 1) {
                 return char;
                 } 
            } 
            return null;
        }

    console.log(nonRepeating(string)) 