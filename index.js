const music = document.getElementById("music");
const playButton = document.getElementById("play");
const playhead = document.getElementById("elapsed");
const timeline = document.getElementById("slider");
var timer = document.getElementById("timer");
var duration;
var playing = true;

var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

music.addEventListener("timeupdate", timeUpdate, false);

function timeUpdate() {
	var playPercent = timelineWidth * (music.currentTime / duration);
	playhead.style.width = playPercent + "px";

	var secondsIn = Math.floor(((music.currentTime / duration) / 3.5) * 100);
	if (secondsIn <= 9) {
		timer.innerHTML = "0:0" + secondsIn;
	} else {
		timer.innerHTML = "0:" + secondsIn;
	}
}

playButton.onclick = function() {
    if (playing){
        music.play();
        playButton.innerText = '||';
    }else{
        music.pause();
        playButton.innerText = '|>';
    }
    playing=!playing
}

music.addEventListener("canplaythrough", function () {
	duration = music.duration;
}, false);