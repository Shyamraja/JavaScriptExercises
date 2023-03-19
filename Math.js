//write js function to generate random whole number from 0 to 9

function randomDigit() {
    return Math.floor(Math.random() * 10);
  }


/*Create a function called randomRange that takes a range myMin and myMax and returns
 a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.*/
 function randomRange(myMin, myMax) {
    
  let randomDecimal = Math.random();
  
    let range = myMax - myMin + 1;
    let randomInteger = Math.floor(randomDecimal * range);
  
    //now Adding the minimum value to the scaled random number to ensure it falls within the desired range of integers
    let result = randomInteger + myMin;
  
    // Returning the result
    return result;
 }  
console.log(randomRange(0, 100));


//Random math function

function randomInRange(min, max) {
    //this is  generating a random decimal number between 0 (inclusive) and 1 (exclusive)
    let randomDecimal = Math.random();
  
    // the line below scales the random decimal number to the range of possible values
    let range = max - min + 1;
    let randomValue = Math.floor(randomDecimal * range) + min;
  
    // Returning the result after this
    return randomValue;
  }
  
  let x = -5;
  let y = 10;
  let absX = Math.abs(x); // absX = 5
  let ceily = Math.ceil(y / 2); // ceilY = 5
  let floorX = Math.floor(x / 2); // floorX = -3
  let randomNum = randomInRange(1, 10); // generates a random number between 1 and 10
  
  console.log(absX, ceily, floorX, randomNum); 