//Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {

    if (endNum < startNum) {
    // Base case: if endNum is less than startNum, return an    empty array
    return [];
  } else {
    // Recursive case: call rangeOfNumbers with startNum+1 and concatenate the result with [startNum]
    let arr = rangeOfNumbers(startNum + 1, endNum);
    arr.unshift(startNum);
    return arr;
  }
}
console.log(rangeOfNumbers(1, 10));