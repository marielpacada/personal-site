/* eslint-env jquery */
$(function () {

    var tap = ("ontouchstart" in document.documentElement);
    if (!tap) {
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
    }

    if (tap) {
        $(".project-cover").each(function () {
            colorizeBackground($(this));
        });

        $(".project-emoji").css({ "opacity": "0" });
        $(".project-desc").css({ "opacity": "1" });
    }


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

    $(".note-file").on("click", function () {

        // this has to happen for each note content
        $(".note-content").each(
            function () {
                // all note content start with hidden class
                // if the hidden class was removed, add it again to hide
                !$(this).hasClass("hidden") && $(this).addClass("hidden");
                // if shown class was added, remove it to hide
                $(this).removeClass("shown");
            }
        );

        const fileKey = $(this).attr("id").slice(-1);
        const contentId = "#content-".concat(fileKey);

        $(contentId).removeClass("hidden");
        $(contentId).addClass("shown");
    });




});
