$(document).ready(function() {

    $("#image-button").click(function() {
      $.ajax({
        dataType: "json",
        url: "https://random.dog/woof.json",
        success: function(results) {
          console.log(results["url"]);
          if (results["url"].endsWith(".mp4")) {
            $("#dog-image").attr("src", "images.jpeg");
          } else {
            $("#dog-image").attr("src", results["url"]).attr("width", 250).attr("height", 250);
          }
        },
        error: function(xhr,status,error) {
          console.log(error);
        }
      });
    });

    $('#quote-button').click(function() {
        $.ajax({
          dataType: "json",
          url: "https://api.breakingbadquotes.xyz/v1/quotes",
          success: function(results) {
            console.log(results[0]["author"]);
            $("#dog-name").html("Dog Name: " + results[0]["author"]);
            $("#dog-quote").html(results[0]["quote"]);

          },
          error: function(xhr,status,error) {
            console.log(error);
          }
        });
      });

  });