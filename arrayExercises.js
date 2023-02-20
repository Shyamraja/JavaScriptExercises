//write a function to create the array values greate than 0 and divisible by 2.
const arr = [1, -4, 12, 0,2, 8, 1, 22, 20, 22, -3, 29, 100, 123, 2345,-150];
let sortedArr = []

//let num = 0
//const newArr = (arr, num) => {
  const newArr = () => {
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0 && arr[i] % 2 === 0){
        sortedArr.push(arr[i])
      }
    }
    return sortedArr
  }
  console.log(newArr())


//Write a function to display unique values from the array
function getUniqueValues(arr) {
  const set = new Set(arr)
  return [...set]
}
console.log(getUniqueValues(arr))


//What is output of the array below 
const arrayOfEvenNumbers = [0, 2, 4];
arrayOfEvenNumbers[100] = 98;
console.log(arrayOfEvenNumbers.length);

//find the name Kari and display the from below students
const students= [
{
  name: "Pekka",
  age:34
},
{
  name:"Kari",
  age:30
},
];


const student = students.find(function(student){
  return student.name.indexOf("Kari") > -1;
});
console.log(student);

