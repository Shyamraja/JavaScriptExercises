/*
function hello() {
        //alert('Hello world!');
        //const heading narahera yo code ko block hatayera  heading ko thauma document.querySelector('h1') 
        //rakhyo vane code ali lengthy dekhin6 vanera yo idea laune
    const heading = document.querySelector('h1');
      if (heading.innerHTML === 'Hello!'){
         heading.innerHTML = 'Goodbye!';
         } else {
          heading.innerHTML = 'Hello!';
        }
    }
   */ 
  //Push the odd numbers from 1 through 9 to myArray using a for loop.

myArray = [];
for (i =0 ; i <= 9; i++){
  if ( i % 2 !== 0) {
     myArray.push(i)
  }
}
console.log(myArray);