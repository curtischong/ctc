$(document).ready(function () {
    $("#mainImage").css("height", screen.height - 101);
    if (document.body.clientWidth < 500) {
        //handle ctc title animation
        $(".tspan").css("font-size", "21px");
    }
    var fadeInCTC = function () {
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
        }, 200);
        $("#t15").fadeTo(1300, 1);
        $("#t16").fadeTo(1200, 1);
        $("#t17").fadeTo(800, 1);
    };

    $("#homepageFront").css("height", window.innerHeight);
    $("#logoIcon").fadeIn(1600);
    $("#logoIcon").css("top", (window.innerHeight / 2) - 100);
    $("#logoIcon").css("left", (window.innerWidth / 2) - 50);
    $("#logoText").css("top", ((window.innerHeight / 2) - 55));
    var nameWidth = $("#nameWidth").width();

    setTimeout(function () {
        if (document.body.clientWidth > 500) {
            $("#logoIcon").animate({
                left: window.innerWidth / 2 - nameWidth / 2 - 75
            }, {
                queue: false
            });
            $("#logoText").animate({
                right: 0,
                queue: false
            }, {
                queue: false
            });
            fadeInCTC();
            setTimeout(function () {
                $("#logoIcon").fadeOut(2500);
            }, 1200);
        } else {
            setTimeout(function () {
                $("#logoIcon").fadeOut(2500);
            }, 600);
            $("#logoText").css("top", window.innerHeight / 2 - 50);
            $("#logoText").css("right", 0);
            fadeInCTC();
        }
    }, 2000);

    //makes navbar responsive
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
    var emailLoc = $("#emailCon").offset().top;

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > screen.height - 120) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
            if ($(this).scrollTop() > screen.height - 200) {
                $('#introTextP').animate({opacity: 1}, 700);
            }
            if ($(this).scrollTop() > emailLoc - screen.height + 180) {
              $("#questionIn").animate({
                width: $("#emailformcon").width(),
                queue: false
              }, 1200);
            }
            if($(this).scrollTop() > screen.height - 340){
            $("#aboutIntroP").fadeIn(700);
            setInterval(function () {
              $("#jakeCard").fadeTo(700,1);
            }, 900);
            setInterval(function () {
              $("#curtisCard").fadeTo(700,1);
            }, 1300);
}
        });
    });

    //"chatbot" logic
    var sendMail = function (body) {
      window.location.href = "mailto:info@changethroughcode.com?body=" + body;
    };

    var indexOfMax = function (arr) {
      if (arr.length === 0) {
        return -1;
      }
      var max = arr[0];
      var maxIndex = 0;
      for (var b = 1; b < arr.length; b++) {
        if (arr[b] > max) {
          max = arr[b];
          maxIndex = b;
        }
      }
      return maxIndex;
    };
    var provideAns = function (ans) {
      $("#incorrectAnswer").fadeOut(400);
      $("#questionAnswer").fadeOut(400, function () {
        $("#questionAnswer").html(ans);
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
      });
    };

    var answersArray = ["Like many regions, Ontario is burdenned and taxed with problems that affects those who calls it home (if you can even get home from the traffic). And an inspiration came after we realized that people who virtually marries their computer all day, has the potential to look at the community in a broader scale and make a lasting difference.", "Change through Code was formed in July 2016", "Change through Code was founded by Curtis Chong, Jake Xia, Daniel Wu, and Yonglin Wang"];
    //0 = why change through code was formed
    //1 = when was it formed
    //2 = who formed it
    document.getElementById('questionIn').onkeypress = function (e) {
      if (!e) e = window.event;
      var keyCode = e.keyCode || e.which;
      if (keyCode == '13') {
        var answerArray = [0, 0, 0];
        var question = $("#questionIn").val().toLowerCase();
        if (question.indexOf("why") != -1) {
          answerArray[0]++;
        }
        if (question.indexOf("form") != -1) {
          answerArray[0]++;
          answerArray[1]++;
          answerArray[2]++;
        }
        if (question.indexOf("when") != -1) {
          answerArray[1]++;
        }
        if (question.indexOf("who") != -1) {
          answerArray[2]++;
        }
        $("#aboutMoreInfo").animate({
          marginTop: 70
        }, {
          queue: false,
          duration: 500
        });
        console.log(answerArray);
        if ((answerArray[0] == 0) && (answerArray[1] == 0) && (answerArray[2] == 0)) {
          $("#incorrectAnswer").fadeOut(400);
          $("#questionAnswer").fadeOut(400, function () {
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
          });
        } else {
          console.log(answerArray);
          console.log(indexOfMax(answerArray));
          provideAns(answersArray[indexOfMax(answerArray)]);
        }
      }
    }
    $("#incorrectAnswer").on("click", function () {
      sendMail($("#questionIn").val());
    });
});
