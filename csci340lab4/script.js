$(document).ready(function() {
    $('#image-button').click(function() {
      $.ajax({
        dataType: "json",
        url: "https://random.dog/woof.json",
        success: function(results) {
          console.log(results["url"]);
          if (results["url"].endsWith(".mp4")) {
            $('#dog-image').attr("src", "images.jpeg");
          } else {
            $('#dog-image').attr("src", results["url"]).attr("width", 250).attr("height", 250);
          }
        },
        error: function(xhr,status,error) {
          console.log(error);
        }
      });
    });
  });