//write an example of callback function
let arr = [1, 2, 3, 4, 5];
function newArray(arr, callback) {
    // use array method here
    arr.push(100);
    // then here  execute the callback function that was passed
    callback();
  }
  
  newArray(arr, function() {
    console.log("array has been modified", arr);
  });