//Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
//without using recursive function it can be done in the way below,
function addAll(arr) {
    let sum = 0;
    for (let i=0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
  }
  console.log(addAll([1, 2, 4, 7]));


//By using recursive function it can be done as below
function sum(arr, n) {
//arr means array and n sums upto nth number
  if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  
  }
  console.log(sum([2, 3, 6, 9], 4));

 
  
  