// // business logic

// Array(InputString)
  // turn the input string into an array
  // loop
  // is this a vowel? branching with .match()

var vowel = ['a','e','i','o','u']

var characters = function(letters) {
  if (letters.match(/[a-z]/g)){
    return true;
  } else {
    return false;
  };
};

  var letterType =function(kind) {
  if (characters === true && letters === vowel)
    return vowels;
  };
  // break the sentenece down into an array of words
console.log(vowel);


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