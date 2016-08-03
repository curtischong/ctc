$(document).ready(function () {
    $("#mainImage").css("height", screen.height - 101);


    setInterval(function () {


        if ($("#bs-example-navbar-collapse-1").attr("aria-expanded") == true) {
            alert("true");
        }
    }, 300);




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
    
    document.getElementById('questionIn').onkeypress = function (e) {
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13') {
            var question = $("#questionIn").val().toLowerCase();
            if (question.indexOf("when") != -1) {
                $("#questionAnswer").html("Change Through Code was formed in June 2016...");
                $("#questionAnswer").fadeIn(800, function () {
                    $("#incorrectAnswer").animate({
                        marginTop: 40
                    }, {
                        queue: false,
                        duration: 800
                    });
                    $("#incorrectAnswer").fadeIn(1000);
                });
            } else {
                sendMail(question);
            }
        }
    }
    $("#incorrectAnswer").on("click", function () {
        sendMail($("#questionIn").val().toLowerCase());
    })
    var sendMail = function (body) {
        window.location.href = "mailto:mail@example.org?body=" + body;
    };

});