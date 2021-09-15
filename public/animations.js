/* eslint-env jquery */
$(function () {

    $(".project-cover").on({
        mouseenter: function () {
            colorizeBackground($(this));
            hideEmoji($(this.firstChild));
            showDescription($(this.lastChild));
        },
        mouseleave: function () {
            decolorizeBackground($(this));
            showEmoji($(this.firstChild));
            hideDescription($(this.lastChild));
        }
    });

    /**
     * This allows the hover effect to work for the project-cover when hovering over the title div
     */
    $(".project-title-div").on({
        mouseenter: function () {
            const cover = $(this).next(); // project-cover
            colorizeBackground(cover);
            hideEmoji(cover.children().slice(0, 1)); // project-emoji
            showDescription(cover.children().slice(1)); // project-desc
        },
        mouseleave: function () {
            const cover = $(this).next();
            decolorizeBackground(cover);
            showEmoji(cover.children().slice(0, 1));
            hideDescription(cover.children().slice(1));
        }
    });

    function colorizeBackground(obj) {
        obj.css({ "background-color": obj.attr("my-color"), "opacity": 1 });
    }

    function decolorizeBackground(obj) {
        obj.css({ "background-color": "rgba(255, 255, 255, .20)" });
    }

    function hideEmoji(obj) {
        obj.css({ "opacity": "0" });
    }

    function showEmoji(obj) {
        obj.css({ "opacity": "100%" });
    }

    function showDescription(obj) {
        obj.css({ "opacity": "100%" });
    }

    function hideDescription(obj) {
        obj.css({ "opacity": "0" });
    }

    $(".project-card").on("click", function () {
        window.open($(this).attr("url"));
    });

    $(".contact-icon").on("click", function () {
        window.open($(this).attr("url"));
    });

    // get the first note file and change border of top left (first one)
    $(".note-file").first().css({
        "border-radius": "25px 0 0 0"
    });

    $(".note-file-div").on("click", function () {

        // note content should show
        // which means we remove the hidden class and add the shown class
        // how do we get the corresponding one?
        // we get the sibling with next, and we get the first child 
        // we can use slice like last time :)

        // clear the div first and then show :)
        $(".note-content").children().css({ "display": "none" });
    });




});
