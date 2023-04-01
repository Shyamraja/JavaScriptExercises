//write a function that takes two array and return new array that contains non repeating elements in both arrays

function sortedArray(arr1, arr2) {
   
    let combinedArr = [...new Set(arr1.concat(arr2))];
    
    let result = combinedArr.filter((item) => 
      (arr1.includes(item) && !arr2.includes(item)) || 
      (!arr1.includes(item) && arr2.includes(item))
    );
    
    return result;
  }
  console.log(sortedArray([3, 5, 8, 9], [3, 4, 7,89]));