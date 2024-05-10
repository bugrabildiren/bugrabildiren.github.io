$(document).ready(function() {
    $("#image_list a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });
    
     
    $("#image_list a").click(function(evt) {
       
        evt.preventDefault();
        
     
        var imageURL = $(this).attr("href");
        
        $("#image").fadeOut("fast", function() {
            
            $(this).attr("src", imageURL);
            
            $(this).fadeIn("fast");
        });
        
        var caption = $(this).attr("title");
        $("#caption").text(caption);
    });
    
    $("li:first-child a").focus();
});
