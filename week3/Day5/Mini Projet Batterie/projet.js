var allowed_keys = [65,83,68,70,71,72,74,75,76];

window.addEventListener('keydown', function(event){
    	var keyCode = event.keyCode;
    	if (!allowed_keys.includes(keyCode)) return;
    	event.preventDefault();
    	event.stopPropagation();
    	playAudio(keyCode)
});

var content = document.getElementsByClassName("content");
for (var i = 0; i < content.length; i++) {
    content[i].addEventListener('click', function(){
    	var keyCode = this.getAttribute("data-key");
    	playAudio(keyCode); 
    }, false);
}

function playAudio(keyCode) { 
	
	var note = document.querySelector("audio[data-key='"+keyCode+"']");
    var drum = document.querySelector(".content[data-key='"+keyCode+"']");
	note.currentTime = 0;  //Sets current position of playback to 0. So the sound restarts if its still playing.
	drum.classList.add("playing");
	setTimeout(function(){
		drum.classList.remove("playing");
	},100)
	note.play();
} 