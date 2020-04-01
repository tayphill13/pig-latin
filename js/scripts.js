// business logic

var letter =['a-z'];
var capital=['A-Z'];

// Array(InputString)
  // turn the input string into an array
  // loop
  // is this a vowel? branching with .match()

var characters = function(letters) {
  if ("#word" === letter){
    return true;
  } else{
    return false;
  };
};
console.log(characters);


// if (letter === 'a' || letter === 'b')

//user interface logic

$(document).ready(function() {
  $("form#pig").submit(function(event) {
    event.preventDefault();
    var letters = $("input#word").val();
    var result = characters(letters);
    $('#result').text(result);
  })
})