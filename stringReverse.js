//Reverse each word in this sentence
let string = "I study JavaScript!";

let reverseSentence = reverseBySeparator(string, "");

let reverseEachWord = reverseBySeparator(reverseSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
console.log(reverseBySeparator(string, " "));