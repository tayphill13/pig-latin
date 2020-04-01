// // business logic

// Array(InputString)
  // turn the input string into an array
  // loop
  // is this a vowel? branching with .match()

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  var characters = function(letters) {
    var vowel = ['a','e','i','o','u']

    let vowelArray = letters.split(',');
    console.log(vowelArray)

    if (!letters.match(/[a-z]/g)){
      return "This is not a word.";
    // check to see if the first letter is a vowel using bracket notation to see the first letter and comparing it to the array of vowels
    } else if (vowelArray[0].map(vowel)) {
      console.log("test")
      return 'vowel';
    } 
  //   else if (letters.match()) { 
  //     return false;
    
  //   // We want to return false when there are no vowels in the letters
  // };
};

// console.log(characters)

  // var letterType = function(letters) {
  //   if (characters === true && letters === vowel){
  //     return true;
  //   }
  // };
  // break the sentenece down into an array of words
// console.log();


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