console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

let age = 30;
age = 31;
console.log(age);

//in let we can change the number(reassign) as we want for age
//in const  not possible to reassign, it will give error if we try to reassign 
  const year = 30;
  //year = 31;
 console.log(year);
//String, Numbers, Boolean, null, undefined

const name = 'John';
const ages = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof y);
console.log(typeof ages);
console.log(typeof name);
console.log(typeof x);
//type of x it shows Object which is wrong here


const fname = 'Shyam';
const height = 170;
// Concatenation
 console.log('My name is ' + fname + ' and I am '+ height);
//template strings better one to Concatenation
console.log(`my name is ${fname} and I am ${height} cm tall`)
const hello = `My name is ${fname} and I am ${height}`;
console.log(hello);

//length property

const string = 'Hello World';
console.log(string.length);



//To lower case

const s = 'Hello World!';
console.log(s.substring(0, 9).toUpperCase());
console.log(s.split(''));

//*/
//From 0 to 9 sammako matra dekhau6

const moi = 'Hello World!';
console.log(moi.toLowerCase());
console.log(moi.toLocaleUpperCase());














