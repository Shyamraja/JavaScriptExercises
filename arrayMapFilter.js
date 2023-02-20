//Write a function to get square of array which are less than or equal to 10 and divisible by particular number
let array =[1, 2, 3,9,11,13,78, 87 ,20, 15]
let newArray= [];

let sqrArray = () => {

for(let i=0 ; i< array.length; i++){
    if(array[i]<=10 && array[i]%2 == 0) 
        newArray.push(array[i]**2)
}
    return newArray
};
console.log(sqrArray())


//Similarly can be done by filter and map in better way 
let numbers = [1, 2, 3,9,11,13,78, 87 ,20, 15]
const returnArr = numbers.filter(number => number < 10 && number % 2 != 0).map((numbers)=> numbers**3)
console.log(returnArr)

//Similarly can be done by filter and map in better way 
let returnArray = (numbers) => numbers.filter((number) => number < 10).map(number => number**3)
console.log(returnArray([...numbers]))


