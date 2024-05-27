// Lab 13: Loops
// Author: Jack Grzegorzyk
// Date: May 27th, 2024
 // Description: This program loops through numbers 1 to 200, printing them and applying Fizz, Buzz, and Boom rules.



// Function to perform FizzBuzzBoom 
function fizzBuzzBoom (maxNums, factorObj) {
  // loop through nums 0 to maxNum
    for (var num=0; num<maxNums; num++) {
  //create empty string to store current num output
      var outputStr = "";
  //loop thru each factor in factorObj
      for (var factor in factorObj) {
// is the current number divisible by the factor? If yes.....
        if (num % factor == 0) {
// then append the corresponding value to the output string!
          outputStr += factorObj[factor];
        }
      }
// if output string has content, add additional formatting
      if (outputStr){
        outputStr = " - " + outputStr + " ! ";
      }
//output current number and corresponding factors to page
      outputToPage(num.toString() + outputStr)
    }
}
// Function to output content to the page
function outputToPage(output) {
  $("#output").append("<p>" + output + "</p>");
}
// Run the code inside the anonymous function when the document is ready
$(document).ready(function(){
 // Define objects and their corresponding strings
  var factors = {
    3: "Fizz",
    5: "Buzz",
    7: "Boom"
  };
// Call fizzBuzzBoom function with specified factors and max number
  fizzBuzzBoom(200, factors)
});