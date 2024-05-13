// Lab 9: Libraries & jQuery
// Author: Jack Grzegorzyk
// Date: May 12th, 2024

$(document).ready(function() {
    // Add button to challenge section
    $("#challenge").append("<button id='button-challenge'>Press me, baby!</button>");

    $("#button-challenge").click(function(){
        $("#challenge").toggleClass("special");
        $("#results").toggleClass("special");
        $("#problems").toggleClass("special");
        $("body").toggleClass("special-background");
        $("body").toggleClass("special-text");
    });
});