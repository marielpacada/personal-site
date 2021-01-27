var isIntroTyped = false;

function typeIntro() {
    var intro = document.getElementById("intro");
    var typewriter = new Typewriter(intro, { delay: 100 });

    typewriter.start();
    typewriter.typeString("hey, my name is ...");
    isIntroTyped = true;

    setTimeout(() => { this.typeDesc(isIntroTyped); }, 3500);
    typewriter.pauseFor(7000);
    typewriter.deleteChars(3);
    typewriter.typeString(" ariel?");
    typewriter.pauseFor(5000);
    typewriter.deleteChars(6);
    typewriter.typeString("mariel!");


}

function typeDesc(bool) {
    if (bool) {
        var name = document.getElementById("name");
        var typewriter = new Typewriter(name, {cursor:'', delay:20});

        typewriter.start();
        typewriter.typeString("like the little mermaid");
        typewriter.pauseFor(3000);
        typewriter.typeString(" with an m in front.");

    }

}

