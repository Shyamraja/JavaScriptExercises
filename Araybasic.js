var breakfast = ["coffee", "croissant"];
var lunch = ["rice","dal"];
//var food = (breakfast).concat.(lunch);
var food = ["coffee", "croissant"].concat(["rice","dal"]);
//console.log(lunch);
console.log(food);

//Push the odd numbers from 9 through 1 to myArray using a for loop.
/*
const myArray = [];
let i = 9;
for (let i = 9; i >= 1; i -= 2){
  myArray.push(i);
}
console.log(myArray);
*/
//multi dimensional array multily example
function multiplyAll(arr) {
    let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
     product = product * arr[i][j];
    }
  }
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
  