var numberOfDrum = document.querySelectorAll(".drum").length;

// for mouse click
for(var i = 0;i < numberOfDrum;i++){
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
		var button = this.innerHTML;
		makesound(button);
		animation(button);

	});
	//this.style.fontSize = "10rem";
}
//for keyboard press
document.addEventListener("keypress",function(event){
	makesound(event.key);
	animation(event.key);
});

// fuction for sound
function makesound(press){
	switch(press){
		case "w":
			var sound = new Audio("sounds/crash.mp3");
			sound.play();			
		break;

		case "a":
			var sound = new Audio("sounds/tom-1.mp3");
			sound.play();	
		break;

		case "s":
			var sound = new Audio("sounds/tom-2.mp3");
			sound.play();	
		break;

		case "d":
			var sound = new Audio("sounds/kick-bass.mp3");
			sound.play();	
		break;

		case "j":
			var sound = new Audio("sounds/snare.mp3");
			sound.play();	
		break;

		case "k":
			var sound = new Audio("sounds/tom-3.mp3");
			sound.play();	
		break;

		case "l":
			var sound = new Audio("sounds/tom-4.mp3");
			sound.play();	
		break;

	}
}

//animation
function animation(key){
	document.querySelector("."+ key).classList.add("pressed");

setTimeout(function(){
		document.querySelector("."+ key).classList.remove("pressed")},100)

}
