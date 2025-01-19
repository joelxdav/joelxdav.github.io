////////START////////////

//// PW STORAGE TIPS /////////////////////////
/*
// Store a value
localStorage.setItem("firstVisit", "true");
// Retrieve a value
let visitCount = localStorage.getItem("firstVisit");
console.log(username); // Output: John Doe
// Remove a value
localStorage.removeItem("username");
// Clear all values
localStorage.clear();
*/


//// PW HANDLING///////////////////////// 
// remove blocker
function openUp() {
	document.getElementById("pw").style.transition = "3s"; 
	document.getElementById("pw").style.opacity = 0; 
	document.getElementById("pw").style.zIndex = -9; 
	writeLetter(); 
	sky();
} 

// enter pw
setTimeout(function() {
	// check screen size
	if (document.body.clientWidth >= 750 && document.body.clientWidth >= 400) {	
		// check local storage
		if (localStorage.getItem("firstVisit") === "false") {
			let nickname = localStorage.getItem("nickname"); 
			//alert("Welcome back, " + nickname); //////////////////////////////////////////////
			openUp(); 
		} else {
			const secretWord = "bakersfield"; 
			let pw = prompt("what's the secret word?");	
			//check pw
			if (pw.toLowerCase() == secretWord){ 
				alert("correct!"); 
				localStorage.setItem("firstVisit", "false");
				let nickname = prompt("pick a nickname?");	
				localStorage.setItem("nickname", nickname);
				alert("thanks, " + nickname); 
				openUp();
			} else { // pw
				alert("sorry incorrect. refresh the page and try again."); 
			}
		} // local storage
	} else { // screen size
		alert("Uh-Oh! Your screen size may be too small. Please view this page on a Desktop browser. Preferably Chrome."); 
	}
}, 1000);



		
//// SKY MOVEMENT /////////////////// 
function sky() {
	var h = 0 - $("#sky").height();
	var sh = $(window).height();
	var m = (h+sh) + "px";
	$("#sky").animate({top: m}, 100000);
}



//// MOON & STARS GIF /////////////////
setTimeout(function(){
	$("#moon-stars").animate({opacity: "1"}, 5000); 
	//$("body").append('<div id="link"><a href="http://dimensionalhearts.tumblr.com/ask">ask me anything</a>&nbsp;&nbsp;<a href="https://open.spotify.com/user/jedpro/playlist/4Whcut8UOi5Y2VR95D1KRB">listen to a playlist</a></div>'); 
	//$("#link").animate({opacity: "1"}, 5000); 	
}, 55000); 




//// MOMENTS CHECK //////////////////////////
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