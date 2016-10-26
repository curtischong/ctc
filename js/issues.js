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
    $(function () {
        $(window).scroll(function() {
            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > $("#bannerPhoto").height()-300) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
      });
    $("#storyHeader").css("top", window.innerHeight-200);

    //chart statistics
    var chart = new CanvasJS.Chart("chartContainer", {
      title: {
        text: "Mobile / Tablet OS Market Share, Jun 2015"
      },
      animationEnabled: true,
      theme: "theme2",
      backgroundColor: "black",
      data: [
      {
        type: "doughnut",
        indexLabelFontFamily: "Garamond",
        indexLabelFontSize: 20,
        startAngle: 0,
        indexLabelFontColor: "dimgrey",
        indexLabelLineColor: "darkgrey",
        toolTipContent: "{y} %",
        dataPoints: [
        { y: 51.04, indexLabel: "Android {y}%" },
        { y: 40.83, indexLabel: "iOS {y}%" },
        { y: 3.20, indexLabel: "Java ME {y}%" },
        { y: 1.11, indexLabel: "BlackBerry {y}%" },
        { y: 2.29, indexLabel: "Windows {y}%" },
        { y: 1.53, indexLabel: "Others {y}%" }

        ]
      }
      ]
    });

    chart.render();
});
