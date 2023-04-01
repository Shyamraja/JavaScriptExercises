//Odd Occurrences In Array exercise
// Finds element without a pair in an unsorted array of integers
function solution(A) {
    A = A.sort();
  
    let val = A[A.length - 1];
    for (let i = 0; i < (A.length - 1) / 2; i++) {
      if (A[i * 2] !== A[i * 2 + 1]) {
        val = A[i * 2];
        break;
      }
    }
    return val;
  }