// cycle images in the following order: CHERRY --> LEMON --> ORANGE
function nextImage(el){
	if ( el.src.match("images/cherry_slot.PNG")){
		// if the image is a cherry, change it to a lemon!
		el.src = "images/lemon_slot.PNG";
	} else if (el.src.match("images/lemon_slot.PNG")){
		// if the image is a lemon, change it to an orange!
		el.src = "images/orange_slot.PNG";
	} else if (el.src.match("images/orange_slot.PNG")){
		// if the image is an orange, change it to a cherry!
		el.src = "images/cherry_slot.PNG";
	} else {
		// do nothing
	}
}

// LEMON --> BAR --> CHERRY
 function nextImageb(el){
	 if ( el.src.match("images/lemon_slot.PNG")){
 		// if the image is a lemon, change it to a bar!
 		el.src = "images/bar_slot.PNG";
 	} else if (el.src.match("images/bar_slot.PNG")){
 		// if the image is a bar, change it to an cherry!
		el.src = "images/cherry_slot.PNG";
 	} else if (el.src.match("images/cherry_slot.PNG")){
 		// if the image is an cherry, change it to a lemon!
 		el.src = "images/lemon_slot.PNG";
 	} else {
 		// do nothing
 	}
 }



// ORANGE --> CHERRY --> SEVEN --> WATERMELON
function nextImagec(el){
if ( el.src.match("images/orange_slot.PNG")){
 // if the image is a orange, change it to a cherry!
 el.src = "images/cherry_slot.PNG";
} else if (el.src.match("images/cherry_slot.PNG")){
 // if the image is a cherry, change it to an seven!
 el.src = "images/seven_slot.PNG";
} else if (el.src.match("images/seven_slot.PNG")){
 // if the image is an seven, change it to a watermelon!
 el.src = "images/watermelon.PNG";
} else {
 // if the image is an watermelon, change it to a orange!
  el.src = "images/orange_slot.PNG";
}
}

function checkPosition(el) {
	var wina = document.getElementById('slot1');
	var winb = document.getElementById('slot2');
	var winc = document.getElementById('slot3');
	if(wina.src.match("images/cherry_slot.PNG") && winb.src.match("images/cherry_slot.PNG") && winc.src.match("images/cherry_slot.PNG")){
	document.getElementById('you-win').play();
	wina.classList.add("opaque");
	winb.classList.add("opaque");
	winc.classList.add("opaque");
	console.log("winner");
	// when the JACKPOT! button is clicked, play the slot machine sound
	}
}
