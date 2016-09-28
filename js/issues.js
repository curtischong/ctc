$(document).ready(function() {
    //makes navbar responsive
    $("#bannerPhoto").css("height", window.innerHeight)
    setInterval(function() {
        if ($("#bs-example-navbar-collapse-1").attr("aria-expanded") == true) {
            alert("true");
        }
    }, 300);

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function() {
        $(window).scroll(function() {
            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > $("#bannerPhoto").height()-600) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });
    $("#storyHeader").css("top", window.innerHeight-200);
});
