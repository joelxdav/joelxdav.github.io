//// SPRITE MOVEMENT //////////////////////////// 

const joel = document.getElementById("sprite-joel"); 
joel.style.left = "50%"; 
//let joel_x = 600;
//let joel_y = 10; 
const elli = document.getElementById("sprite-elli");
let elli_x = 20;
let elli_y = 42; 

// LEFT / RIGHT
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
	elli_x -= 1; 
	elli.style.left = elli_x + "%";
	elli.style.transform = "scaleX(-1)";
	document.getElementById("sprite-elli-speech").style.left = elli.style.left;
	document.getElementById("sprite-elli-speech-textbox").style.left = elli.style.left;
  } else if (event.key === "ArrowRight") {
	elli_x += 1; 
	elli.style.left = elli_x + "%";
	elli.style.transform = "scaleX(1)";
	document.getElementById("sprite-elli-speech").style.left = elli.style.left;
	document.getElementById("sprite-elli-speech-textbox").style.left = elli.style.left;
  } 
});
// JUMP 
document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowUp") {
	  $("#sprite-elli").animate({bottom: elli_y += 50}, 250);
	  $("#sprite-elli").animate({bottom: elli_y -= 50}, 250);
	} 
});


