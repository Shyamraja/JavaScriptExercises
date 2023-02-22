let counter = 0;

            function count() {
                counter++;
                document.querySelector('h1').innerHTML = counter;
                //find h1 update the inner html and set it to the
                // the variable counter value

                if (counter % 10 === 0) {
                    alert(`Count is now ${counter}`);
                }
            }
          document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('button').onClick = count;
          });
         