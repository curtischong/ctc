$(document).ready(function () {
    $("#mainImage").css("height", screen.height - 101);



    //this will start the starup animation

    //changethrough code words






    //change through code statement
    /*var titleShowCount = 0;
    var titleShow = setInterval(function(){
        titleShowCount++;
      $("#t"+titleShowCount).fadeTo(1,200);
      $("#t10").fadeTo(1,200);
    },70);*/



    /*
    $("#s1").animate({top: 200,queue: false},2400);
    $("#s2").fadeIn(1000);
    $("#s3").animate({top: 130,queue: false},2400,function(){
        $("#s4").fadeIn(2000);
    });
    $("#s5").animate({top: -5,queue: false},2400);
    setTimeout(function(){
        $("#s6").animate({top: 75,queue: false},2400);
    },400);
    $("#s7").animate({top: 70,queue: false},2400);
    $("#s8").animate({top: 5,queue: false},2400);
    $("#s9").animate({top: 10,queue: false},2400);
    $("#s10").animate({top: 65,queue: false},2400);
    $("#s11").animate({top: 0,queue: false},2400);
    $("#s12").animate({top: 60,queue: false},2400);*/





    /*
    
    
    //animate email link as it comes into view
    function onVisibilityChange(el, callback) {
    var old_visible;
    return function () {
        var visible = isElementInViewport(el);
        if (visible != old_visible) {
            old_visible = visible;
            if (typeof callback == 'function') {
                callback();
            }
        }
    }
}

var handler = onVisibilityChange($("#emailform"), function() {
    $("#emailform").animate({width: 400,queue: false},2400);
});


//jQuery
$(window).on('DOMContentLoaded load resize scroll', handler); 
    
    
    */

    $("#homepageFront").css("height", window.innerHeight);
    $("#logoIcon").fadeIn(1600);
    $("#logoIcon").css("top", (window.innerHeight / 2) - 100);
    $("#logoIcon").css("left", (window.innerWidth / 2) - 50);
    $("#logoText").css("top", ((window.innerHeight / 2) - 55));
    //$("#logoText").css("top", ((window.innerHeight/2)-50));
    setTimeout(function () {
        $("#logoIcon").animate({
            left: window.innerWidth / 2 - 200
        }, {
            queue: false
        });

        $("#logoText").animate({
            right: -10,
            queue: false
        }, {
            queue: false
        });

        $("#t1").fadeTo(1900, 1);
        $("#t2").fadeTo(660, 1);
        $("#t3").fadeTo(500, 1);
        $("#t4").fadeTo(800, 1);
        $("#t5").fadeTo(1700, 1);
        $("#t6").fadeTo(600, 1);
        $("#t7").fadeTo(800, 1);
        $("#t8").fadeTo(1300, 1);
        $("#t9").fadeTo(800, 1);
        $("#t10").fadeTo(2000, 1);
        $("#t11").fadeTo(950, 1);
        $("#t12").fadeTo(700, 1);
        $("#t13").fadeTo(2900, 1);
        $("#t14").fadeTo(900, 1);
        $("#t15").animate({
            top: 500,
            queue: false
        }, 1200);
        $("#t15").fadeTo(1300, 1);
        $("#t16").fadeTo(1200, 1);
        $("#t17").fadeTo(800, 1);


        setTimeout(function () {

            /*$("#logoText").animate({
                top: $("#logoText").offset().top-100
            }, {
                queue: false
            }, 1800);


            $("#logoIcon").animate({
                top: $("#logoIcon").offset().top-100
            }, {
                queue: false
            }, 1800);*/
            $("#logoIcon").fadeOut(2500);
        }, 1200);

    }, 2000);

    setInterval(function () {


        if ($("#bs-example-navbar-collapse-1").attr("aria-expanded") == true) {
            alert("true");
        }
    }, 300);
    var sendMail = function (body) {
        window.location.href = "mailto:info@changethroughcode.com?body=" + body;
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
