// Lab 16: JSON and APIs
// Author: Jack Grzegorzyk
// Date: June 7th, 2024
 // Description: 

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