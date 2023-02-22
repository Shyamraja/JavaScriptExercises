//1.Sorting arrays(basic)

const numbers = [1, 9, 2, 20, 10, 8, 100]
numbers.sort((a, b) => {
    if(a>b) return 1;
    if(a<b) return -1;
    return 0;
});
console.log(numbers);



//For above solution Using Array function as shown below is better than the way done above

let numbs = [0, 1, 2, 3, 10, 20, 30];
numbs.sort((a, b) => a - b);
console.log(numbs);


