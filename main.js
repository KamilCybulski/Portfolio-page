$(document).ready(function () {
    
    //Just a scroller for navigation
    $(".navbtn").click(function(){
        var adress = $(this).attr("href");
        $("html, body").animate({scrollTop: $(adress).offset().top});
    })

});