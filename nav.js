$(function () {
    if ($(window).width() < 1025) {
        $("#nav").css("justify-content", "center");
    }

    if ($(window).height() > $("body").height()) {
        $("footer").addClass("foot-short");
    } else {
        $("footer").removeClass("foot-short");
    }
});
