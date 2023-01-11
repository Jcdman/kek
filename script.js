while (true) {
    let answer = confirm("Do you want to allow this website from an unknown publisher to make changes to your device?");
    if (answer == true) {
        break;
    }
}

window.onload=function(){
    document.querySelector(".funny").click();
    var button = document.querySelector(".funnybutton");
    button.addEventListener("mouseover", function() {
        button.click();
        let soundeffect = new Audio('/audio/check.mp3')
        soundeffect.play();
    });
    const kekbutton = document.querySelector(".kekbutton")
    kekbutton.addEventListener("click", function() {
        let funnysong = new Audio("/audio/Troll Song.mp3")
        funnysong.play();
        let soundeffect = new Audio('/audio/check.mp3')
        soundeffect.play();
    });
    document.querySelector(".funny").click();
    var button = document.querySelector(".funnybutton2");
    button.addEventListener("mouseover", function() {
        button.click();
        let soundeffect = new Audio('/audio/check.mp3')
        soundeffect.play();
    });
    document.querySelector(".funny").click();
    var button = document.querySelector(".funnybutton3");
    button.addEventListener("mouseover", function() {
        button.click();
        let soundeffect = new Audio('/audio/check.mp3')
        soundeffect.play();
    });
    document.querySelector(".funny").click();
    var button = document.querySelector(".funnybutton4");
    button.addEventListener("mouseover", function() {
        button.click();
        let soundeffect = new Audio('/audio/check.mp3')
        soundeffect.play();
    });
    document.querySelector(".funny").click();
    var button = document.querySelector(".funnybutton5");
    button.addEventListener("mouseover", function() {
        button.click();
        let soundeffect = new Audio('/audio/check.mp3')
        soundeffect.play();
    });
    document.querySelector(".funny").click();
    var button = document.querySelector(".funnybutton6");
    button.addEventListener("mouseover", function() {
        button.click();
        let soundeffect = new Audio('/audio/check.mp3')
        soundeffect.play();
    });
};
