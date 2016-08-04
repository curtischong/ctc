$(document).ready(function(){
    var sendMail = function (body) {
        window.location.href = "mailto:info@changethroughcode.com?body=" + body;
    }; 
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
                    $("#incorrectAnswer").html("Didn't really answer your question? Send us an email here.");
                    $("#incorrectAnswer").fadeIn(1000);
                });
            } else {
                $("#questionAnswer").html("It seems like we can't find an answer to your question.");
                $("#questionAnswer").fadeIn(800, function () {
                    $("#incorrectAnswer").animate({
                        marginTop: 40
                    }, {
                        queue: false,
                        duration: 800
                    });
                    $("#incorrectAnswer").html("But send us an email here if you want to know more.");
                    $("#incorrectAnswer").fadeIn(1000);
                });
            }
        }
    }
    $("#incorrectAnswer").on("click", function () {
        sendMail($("#questionIn").val());
    });
});