
let soundeffect = new Audio('https://github.com/Jcdman/kek/blob/master/audio/check.mp3?raw=true')
while (true) {
    let answer = confirm("Do you want to allow this website from an unknown publisher to make changes to your device?");
    if (answer == true) {
        break;
    }
}
soundeffect.play();

window.onload=function(){
    var button = document.getElementById("funnybutton")
    button.addEventListener("mouseover", button.click());
}
