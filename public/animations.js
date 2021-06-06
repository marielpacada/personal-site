/* eslint-env jquery */

$(function () {
    $(".nav-button").on({
        mouseenter: function () {
            var image = "images/btn-bg.jpg"
            $(this).css({
                "color": "white",
                "background-image": "url(" + image + ")",
                "background-size": "cover"
            });
        },
        mouseleave: function () {
            $(this).css({
                "color": "gray",
                "background-image": "none",
                "background-color": "rgba(255, 255, 255, 0)"
            });
        }
    });
});


