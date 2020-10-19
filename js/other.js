// Some variables for fullscreen mode 

let fullScreenOn = document.getElementById("fullscreenOn")
let fullScreenOff = document.getElementById("fullscreenOff")
fullScreenOff.style.display = "none";
let elem = document.documentElement;

// Eventlistener to enable fullscreen mode

fullScreenOn.addEventListener("click", openFullscreen = () => {
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

// Eventlistener to disable fullscreen mode

fullScreenOff.addEventListener("click", closeFullscreen = () => {
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

////////////////////////////////////////////////////////////////

// Some variables for audio mode

let audioOn = document.getElementById("audioOn")
let audioOff = document.getElementById("audioOff")
audioOff.style.display = "none";
let soundtrack = document.getElementById("soundtrack");
soundtrack.play();

// Eventlistener to enable audio mode

audioOff.addEventListener("click", playAudio = () => {

    soundtrack.play();
    soundtrack.loop = true
    audioOn.style.display = "";
    audioOff.style.display = "none";
});

// Eventlistener to disable audio mode

audioOn.addEventListener("click", stopAudio = () => {

    soundtrack.pause();
    audioOn.style.display = "none";
    audioOff.style.display = "";
});