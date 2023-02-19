//Reverse each word in the  sentence below and display result
let string = "I study JavaScript!";

let reverseSentence = reverseBySeparator(string, "");

let reverseEachWord = reverseBySeparator(reverseSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
console.log(reverseBySeparator(string, " "));