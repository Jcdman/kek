while (true) {
    let answer = confirm("Do you want to allow this website from an unknown publisher to make changes to your device?");
    if (answer == true) {
        break;
    }
}

setTimeout(5000);
window.onload=function(){
    document.querySelector(".funny").click();
    var button = document.getElementById("funnybutton");
    button.addEventListener("mouseover", function() {
        button.click();
        let soundeffect = new Audio('https://github.com/Jcdman/kek/blob/master/audio/check.mp3?raw=true')
        soundeffect.play();
    });
    const kekbutton = document.querySelector(".kekbutton")
    kekbutton.addEventListener("click", function() {
        let funnysong = new Audio("https://github.com/Jcdman/kek/blob/master/audio/Troll%20Song.mp3?raw=true")
        funnysong.play();
        let soundeffect = new Audio('https://github.com/Jcdman/kek/blob/master/audio/check.mp3?raw=true')
        soundeffect.play();
    })
};
