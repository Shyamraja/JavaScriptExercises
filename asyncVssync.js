

//Async basic Examples

async function f (){
  return 1;
}
f().then(alert);

console.log('First');

// Set timeout for 3 seconds
setTimeout(() => console.log('Second'), 3000);

console.log('Third');

//Most of the time JavaScript runs Synchronously
//Output:here second comes after 3 seconds because of set time out function,
//while setTimeout is running another another returns the output
//First
//Third
//Second

//Sync Example returns serially

console.log('First');
console.log('Second');
console.log('Third');


// Function which resolves promise with a random number another async example
function generateRandom(min, max) {
    return new Promise(resolve => {
      // using a timeout to make it wait for it by 1000ms
      setTimeout(() => {
        resolve(Math.ceil(Math.random() * (max - min) + min)); // resolving promise
      }, 1000);
    });
  }
  
  //self-executing function
  (async () => {
    const first = await generateRandom(1, 10);
    console.log(first);
  })();
