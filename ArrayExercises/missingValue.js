//Q.1.Find the missing number in an array
/* let array = [1, 2, 3, 4, 5, 7];
const missingValue = [];

let newValue = () => {

   for (let i = 1; i <= array.length; i++)
{
    if(array.indexOf(i) == -1) {
        missingValue.push(i)
     }
}
return missingValue
};
console.log(newValue())
*/

//Another way to solve in beter way is by calculating the sum values
/*
let array = [1, 2, 3, 4, 5, 6, 7, 8, 10];
function missingValue (array) {

  let actualSum = ((array.length + 1) /2)* (array[0] + array[array.length -1]);

  let realSum = array.reduce((sum, num) => sum + num, 0);

  return actualSum-realSum;
}
console.log(missingValue(array));
*/
let array = [1, 2, 3, 4, 5, 6, 7, 8, 10];
function findMissingNumber(array) { 
   let left = 0; let right = array.length - 1; 

   while (left <= right) { 
      const middle = Math.floor((left + right) / 2); 
      const expectedNumber = array[0] + middle;
       if (array[middle] !== expectedNumber) { 
         if (array[middle - 1] === expectedNumber - 1) { 
            return expectedNumber; 
         } else { 
             right = middle - 1; 
            } 
         } else { 
            left = middle + 1; 
         } 
      }
      return null; // If there's no missing number in the array 
   }
      console.log(findMissingNumber(array))