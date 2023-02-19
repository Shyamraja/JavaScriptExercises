//write a function to create the array values greate than 0.
const arr = [1, -4, 12, 0, 20, 1122, -3, 29, 100, 123, 2345,-150];
let sortedArr = []
//let num = 0
//const newArr = (arr, num) => {
  const newArr = () => {
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0 && arr[i] % 2 === 0){
        sortedArr.push(arr[i])
      }
    }
    return sortedArr
  }
  console.log(newArr())

  