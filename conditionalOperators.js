//Solve following example using the conditional operator

function findGreaterOrEqual(a, b) {
    if (a === b) {
      return "a and b are equal";
    }
    else if (a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
  }
 console.log(findGreaterOrEqual(1, 4));

//Solution using conditional Operator in above example

 function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
  }
  console.log(findGreaterOrEqual(1, 1));
