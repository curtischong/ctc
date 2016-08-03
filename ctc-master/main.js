$(document).ready(function(){
    $("#mainImage").css("height", screen.height-101);
    
    
    setInterval(function(){
        
    
    if($("#bs-example-navbar-collapse-1").attr("aria-expanded") == true) {
        alert("true");
}
    },300);
    

    
    
      // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > screen.height-120) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });
    $(function(){
      $(".element").typed({
        strings: ["cd desktop", "Second sentence."],
        typeSpeed: 150
      });
  });
    
})