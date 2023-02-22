//adding 2 numbers
const sum = (a, b) => a + b
console.log(sum(2,5));


//1. display new array by adding values 2 for each values in array
let t1 = [9, 4, 16, 25, 81, 625]
const t2 = t1.map(values => values+2);
console.log(t2);

//2. displaying square of numbers for all array elements
 let a1 = [9, 4, 16, 25, 81, 625]
 const a2 = a1.map(values => values**2);
console.log(a2);

//adding all values in array
let array = [8, 5, 5,8,9 ,110,89,80, -11]
   console.log(array.reduce((a, b) => a + b , 0));

