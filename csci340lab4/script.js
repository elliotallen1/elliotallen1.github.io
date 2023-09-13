$(document).ready(function() {

    var memes = fetch("https://api.imgflip.com/get_memes");

    $('#image-button').click(function() {
      $.ajax({
        dataType: "png",
        url: "https://api.imgflip.com/get_memes",

        success: function(results) {
            var rand = Math.floor(Math.random * 50)
            console.log(memes);
            console.log(rand);
            $('#meme-image').attr("src", memes[rand][2]);
        },

        error: function(xhr,status,error) {
          console.log(error);
        }
      });
    });

  });