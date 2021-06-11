/* eslint-env jquery */
$(function () {

    $(".project-cover").on({
        mouseenter: function () { colorizeBackground($(this)); },
        mouseleave: function () { decolorizeBackground($(this)); }
    });

    $(".project-title").on({
        mouseenter: function () { colorizeBackground($(this).next()); },
        mouseleave: function () { decolorizeBackground($(this).next()); }
    });

    function colorizeBackground(obj) {
        obj.css({ "background-color": obj.attr("my-color"), "opacity": 1 });
    }

    function decolorizeBackground(obj) {
        obj.css({ "background-color": "rgba(255, 255, 255, .20)" });
    }

    $(".project-card").on("click", function() {
        window.open($(this).attr("url"));
    });


});

