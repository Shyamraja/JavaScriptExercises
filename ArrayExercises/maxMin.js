//Q.2.Find the minimum and maximum numbers in an array
/*
let array = [-123, 2, 3, 4, 5, 7, 8976];

  let max = array.reduce(function(a, b) {
    return (a > b) ? a : b;
  });
let min = array.reduce(function(a, b) {
    return (a < b) ? a: b;
});
console.log('Max:' + max);
console.log('Min:' + min);
*/


// ex 2 can be done better By for each method
/*let array = [ 1, 2, 9, 33, 76, -3]

function newArray (array) {
let maxVal = array[0];
let minVal = array[0];

array.forEach((value) => {
    return value > maxVal ? (maxVal = value): (minVal = value);
});
console.log(`${maxVal} ,${minVal}`);
};
return newArray(array);
*/


//Another way

let array = [ 1, 2, 9, 33, 76, -3];

function newArray (array) {

  let maxVal = array[0];
  let minVal = array[0];

   for(let i = 1; i < array.length; i++){
     if (array[i] > maxVal) {
      maxVal = array[i];
     }
     if (array[i] < minVal) {
      minVal = array[i];
     }
   }
  return [ minVal, maxVal];
}
console.log(newArray(array));

