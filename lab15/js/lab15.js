// Lab 15: AJAX
// Author: Jack Grzegorzyk
// Date: June 2nd, 2024
 // Description: This script fetches a random yes or no answer from the Yes or No API using AJAX and displays it on the webpage.

 $(document).ready(function() {
  $("#activate").click(function() {
      $.ajax({
          url: "https://yesno.wtf/api/",
          type: "GET",
          dataType: "json",
          success: function(data) {
              $("#output").html("<p>Answer: " + data.answer + "</p><img src='" + data.image + "' alt='Yes or No image'>");
          },
          error: function(jqXHR, textStatus, errorThrown) {
              console.log("Error:", textStatus, errorThrown);
          }
      });
  });
});

``