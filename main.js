$(document).ready(function () {
    $("#mainImage").css("height", screen.height - 101);


    setInterval(function () {


        if ($("#bs-example-navbar-collapse-1").attr("aria-expanded") == true) {
            alert("true");
        }
    }, 300);
var sendMail = function (body) {
        window.location.href = "mailto:contact@changethroughcode.com?body=" + body;
    }; 



    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > screen.height - 120) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });
    
    document.getElementById('emailform').onkeypress = function (e) {
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13') {
            sendMail($('#emailform').val());
        }
    }
});