// Lab 8: Anon Functions and Callbacks
// Author: Jack Grzegorzyk
// Date: May 6nd, 2024


//function
function isEven(x){
    return (x % 2 == 0);
}

//test function
console.log("Is 31 even? ", isEven(31));
console.log("Is 30 even? ", isEven(30));

array = [231, 20, 15, 16, 32000, 888]
console.log ("My array", array);

var result = array.map (isEven);
console.log ("Test of evenness of arrays:", result);

var result = array.map(function(x){
    return x ** 0.5;
});
console.log ("Squareroot of array:", result);

//map result data
var mapResults = "Original array: [231, 20, 15, 16, 32000, 888] <br> Evenness of array: [false, true, false, true, true, true] <br> Squareroots of array: [15.198684153570664, 4.47213595499958, 3.872983346207417, 4, 178.88543819998318, 29.79932885150268]"

//set HTML content
$("#output").hmtl(mapResults)
