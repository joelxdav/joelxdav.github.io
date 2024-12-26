////////START////////////





//// SPRITE POSITIONING
const joel = document.getElementById("sprite-joel"); 
joel.style.left = "50%"; 
//let joel_x = 600;
//let joel_y = 10; 
const elli = document.getElementById("sprite-elli");
let elli_x = 10;
let elli_y = 100; 

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
	elli_x -= 1; 
	elli.style.left = elli_x + "%";
	elli.style.transform = "scaleX(-1)";
  } else if (event.key === "ArrowRight") {
	elli_x += 1; 
	elli.style.left = elli_x + "%";
	elli.style.transform = "scaleX(1)";
  } 
  /* else if (event.key === "ArrowUp") {
	elli_y += 10; 
	elli.style.bottom = elli_y + "px";
  } else if (event.key === "ArrowDown") {
	elli_y -= 10; 
	elli.style.bottom = elli_y + "px";
  }
	*/
});


//// MOMENTS CHECK
function moments() {
	//CLOCK display check vs window width; 
	let bodyWidth = document.body.clientWidth; 
	if (bodyWidth <= 950) {
		document.getElementById("clock").style.display = "None";
	} else { document.getElementById("clock").style.display = "Block"; }

	// CHECK elli's position for heart icon
	if (elli.style.left >= "42%" && elli.style.left <= "57%") {
		document.getElementById("heart").style.opacity = 1; 
	} else { 
		document.getElementById("heart").style.opacity = 0; 
	}

	// CHECK elli's position for Joel direction
	if (elli.style.left <= "50%") {
		joel.style.transform = "scaleX(1)";
	} else {
		joel.style.transform = "scaleX(-1)";
	}
	
	setTimeout(moments, 500); 
}
setTimeout(moments, 10); 

































/*
//// MESSAGE TO ELLI 

function writeMessage(message) {
	document.getElementById("message").innerHTML = message; 
}

let message = "Welcome"; 
setInterval(writeMessage(message), 500); 
message = "hi"; 
setInterval(writeMessage(message), 5000); 


*/









/*
const folder = document.getElementById("folder"); 

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		// Do something when the objects intersect
		console.log("Objects are intersecting!"); 
	  }
	});
  }, {
	// Optional options for the observer
	root: null, // Use the viewport as the root
	threshold: 0.5 // Trigger when 50% of the target intersects
  });
  
  observer.observe(elli);
  observer.observe(folder);




function alertPosition() {
	alert(elli.style.left);
	alert(elli.style.bottom); 
} 
*/







/*
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
  }  

function joel_rand_move_x() {
	joel_x += getRandomInt(10);
	joel.style.left = joel_x + "px"; 
}
function joel_rand_move_y() {
	joel_y += getRandomInt(10);
	joel.style.bottom = joel_y + "px"; 
}
// Execute the function every 2 seconds (2000 milliseconds)
let intervalId_x = setInterval(joel_rand_move_x, 250);
//let intervalId_y = setInterval(joel_rand_move_y, 500);

// Stop the interval after 10 seconds (10000 milliseconds)
setTimeout(() => {
	clearInterval(intervalId_x);
	console.log("Interval stopped.");
	}, 60000);
setTimeout(() => {
	clearInterval(intervalId_y);
	console.log("Interval stopped.");
  	}, 60000);
*/












/*
var sc=0;
$("#spotify").click(function(){
window.location.assign("https://open.spotify.com/user/jedpro/playlist/4Whcut8UOi5Y2VR95D1KRB");
});
$("#script").click(function(){
window.location.assign("http://cyberletter.tumblr.com/seasons-script");
});
$("#music").click(function(){
if (sc==0) {
	$("#soundCloud").css("display", "block");
	$("#soundCloud").animate({bottom: "0px"}, 750);
	$("#soundCloud").focus();
	sc=1;
} else {
	$("#soundCloud").animate({bottom: "-300px"}, 750);
	$("#soundCloud").blur();
	sc=0;
}
});
$("#soundCloud").blur(function(){
$("#soundCloud").animate({bottom: "-300px"}, 750);
sc=0;
});
var soundcloud_src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/510719238&color=%23f3d9dc&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false";


//// BACKGROUND ///////////////////
var h = 0 - $("#sky").height();
var sh = $(window).height();
var m = (h+sh) + "px";

//$("#sky").css("position", "fixed");
$("#sky").animate({top: m}, 100000);







//// LETTER /////////////////////
var rite; //= setInterval(function(){ var o=null }, 9999); 
//clearInterval(rite);

// letter(string, string length, conditional)
function letter(a,l,i) { 
function wrt() {
	if (i < l) {
		var b = a.substr(0,1);
		

		// Astricks : pause for 3 seconds, then clear block
		if (b=="*") {
			clearInterval(rite);
			b="";
			a = a.slice(1,a.length);
			setTimeout(function(){
				$("#x").animate({opacity: "0"}, 500);
				setTimeout(function(){ document.getElementById("x").innerHTML=""}, 510);
				setTimeout(function(){ rite = setInterval(function(){ wrt() }, 25); }, 520);
			}, 3000 );
		} 
	
		// Hat : pause for 1.5 seconds
		if (b=="^") {
			clearInterval(rite);
			b="";
			a = a.slice(1,a.length);
			setTimeout(function(){
				setTimeout(function(){ rite = setInterval(function(){ wrt() }, 25); }, 500);
			}, 1500 );
		}
		
		
		
	// WRITE //
		$("#x").css("opacity", "1");
		document.getElementById("x").innerHTML += b;
		a = a.slice(1,a.length);
		i++;   
	///////////
		
				
	} 
/*		else {
		clearInterval(rite);
		setTimeout(function(){
			$("#x").animate({opacity: "0"}, 500);
			setTimeout(function(){document.getElementById("x").innerHTML=""}, 510);
		}, (l*50) );
	}
*/
/*
}
rite = setInterval(function(){ wrt() }, 25);
}



///// ONLOAD /////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){



//// WALKING CROWD ////////////////////////////////
var walking;
var n = 1;
function walk() {
	$("#walker").css("right", "33vw");
	$("#walker").attr("src", "walking-"+n+".gif");
	$("#walker").animate({right: "7vw"}, 5000);
	n++;
	if (n==14) { 
		n=1;
		//clearInterval(walking); 
		//$("#walker").remove();
	}
}



setTimeout(function() {
	$("#ending").animate({opacity: "1"}, 5000); 
	$("#link").animate({opacity: "1"}, 5000); 
}, 95000);

				
setTimeout(function() {
		$("#crowd").animate({opacity: "0.5"}, 4000);
		$("#soundCloud").attr("src", soundcloud_src);
}, 5000);


setTimeout(function(){ 
	walking = setInterval(walk, 6000);			
}, 18000);






//// TIMING FOR WRITING LETTERS ///////////////////

$(".portrait").hover(function(){

	clearInterval(rite);
	
	$("#x").html("");
	
	var description = this.title;
	
	letter(description, description.length, 0); 
	
});





setTimeout(function(){
	letter(msg, msg.length, 0); 	
}, 5000);


});
*/