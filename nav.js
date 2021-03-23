$(function () {




    if ($(window).height() > $("body").height()) {
        $("footer").addClass("foot-short");
    } else {
        $("footer").removeClass("foot-short");
    }


});