// // business logic

// const regex = /[a-z]/g;
var input = "#word";

// if ("#word" === input.match(/[a-z]/g))
//   return true;
// console.log(input)


console.log(input)
// example
// var userInput = "Ben works at Epicodus.";
// var userInput2 = "!@#@!#";

// if (["e", "n", "w", "o", "r", "k", "s", "a", "t", "p", "i", "c", "o", "d", "u", "s"]){
//   console.log(userInput.match(/[a-z]/g))
// }

// if ([]){
//   console.log("input 2  good !")
// }

// Array(InputString)
  // turn the input string into an array
  // loop
  // is this a vowel? branching with .match()

var characters = function(letters) {
  if (letters.match(/[a-z]/g)){
    console.log("test")
    return true;
  } else {
    return false;
  };
  // break the sentenece down into an array of words
};
console.log(input.match(/[a-z]/g));


// if (letter === 'a' || letter === 'b')

//user interface logic

$(document).ready(function() {
  $("form#pig").submit(function(event) {
    event.preventDefault();
    var letters = $("input#word").val();
    var result = characters(letters);
    $('#output').text(result);
  })
})