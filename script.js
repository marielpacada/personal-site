function typeIntro() {
    var intro = document.getElementById("intro");
    var typewriter = new Typewriter(intro, {
        delay: 100,
        onCreateTextNode: typeDesc()
    });

    typewriter.start();
    typewriter.typeString("hey, my name is ...");

    // setTimeout(() => { this.typeDesc(); }, 2500);
    typewriter.pauseFor(1800);
    typewriter.deleteChars(3);
    typewriter.typeString(" ariel?");
    typewriter.pauseFor(1800);
    typewriter.deleteChars(6);
    typewriter.typeString("mariel •ᴗ•");
}

function typeDesc() {
    var name = document.getElementById("name");
    var typewriter = new Typewriter(name, { cursor: '', delay: 20 });

    
    typewriter.start();
    typewriter.pauseFor(2500);
    typewriter.typeString("like the little mermaid");
    typewriter.pauseFor(2500);
    typewriter.typeString(' with an "m" in front.');
}


