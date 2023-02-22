/*Q. Write a function to return positive numbers from an array.
The  given  array is:[1, -4, 12, 0, -3, 29, -150]
1. create a new and empty array before function
2. run the for loop
3. apply if else to check the condition
4. push the number into the new array
5. return the new array created before
*/

//Write a function to return a new array contains number bigger than 0
/*
let arr = [1, -4, 12, 0, -3, 29, -150]
let newArr = []
let num = 0

const returnLarger = (arr, num) =>{
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > num){
      newArr.push(arr[i])
    }
  } 
  return newArr
}
console.log(returnLarger([...arr], num))


*/
//However best  solution for the given problem is as below
/*
const arr = [65, 16, 3,1,0, 6, 64, 1, 68, -3, -4,-2]
let returnNew = (arr, num) => arr.filter(n => n > num);
console.log(returnNew([...arr] ,0));
*/

//2. Return numbers from array greater than or equal to 10 and divisible by 2

const numbers = [2, 9, 10, -12,44,10024, -45,0 ,100099,9999,76,56]
let returnArray = (numbers , num) => numbers.filter(n => n >= num && n % 2 == 0);
console.log(returnArray([...numbers], 10 ));




