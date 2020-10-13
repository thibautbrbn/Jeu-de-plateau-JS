let fullScreenOn = document.getElementById("fullscreenOn")
let fullScreenOff = document.getElementById("fullscreenOff")
fullScreenOff.style.display = "none";
let elem = document.documentElement;

fullScreenOn.addEventListener("click", function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
    fullScreenOn.style.display = "none";
    fullScreenOff.style.display = "";
});

fullScreenOff.addEventListener("click", function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
    }
    fullScreenOff.style.display = "";
    fullScreenOn.style.display = "none";
});

let audioOn = document.getElementById("audioOn")
let audioOff = document.getElementById("audioOff")
audioOff.style.display = "none";
let soundtrack = document.getElementById("soundtrack");
soundtrack.play();

audioOff.addEventListener("click", function playAudio() {

    soundtrack.play();
    soundtrack.loop = true
    audioOn.style.display = "";
    audioOff.style.display = "none";
});
audioOn.addEventListener("click", function stopAudio() {

    soundtrack.pause();
    audioOn.style.display = "none";
    audioOff.style.display = "";
});