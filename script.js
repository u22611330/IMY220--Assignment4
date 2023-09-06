//Mary-Jane Pandaram u2261130
$(document).ready(function() {
    
    $(".submit").on("click", function() {
     
      var hello = $("#message").val().trim();

      if (hello !== "") {
    
        var youtubecheck = /(?:https?:\/\/(?:www\.)?youtube\.com\/watch\?v=|https?:\/\/youtu\.be\/)([a-zA-Z0-9_-]+)/;
        var check = hello.match(youtubecheck);
  
        if (check) {
       
          var video = check[1];
          var iframee = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/' + video + '" frameborder="0" allowfullscreen></iframe>';
          
     
          hello = hello.replace(youtubecheck, iframee);
        }
      
  
      var btnid = $(this).attr("id");
      var backgroundColor;
      

      if (btnid === "left") {
        backgroundColor = "lightblue";
     
      } else if (btnid === "right") {
        backgroundColor = "lightgreen";
  
      }
  
      if (hello !== "") {

        var hellodiv = $("<div></div>", {
          class: "col-4", 
          html: hello,
          css:{ backgroundColor: backgroundColor
          }
         
        });
  
        $(".messages").append(hellodiv);
  
     
        $("#message").val("");
      }}
    });
  });
  
  //<iframe width="560" height="315" src="https://www.youtube.com/embed/VYBZ-d0EyKo?si=RrOGR0VFBtigBSrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  //<iframe width="560" height="315" src="https://www.youtube.com/embed/4DQ9ndGt_kU?si=uPKPjRD-qTivqEPc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>