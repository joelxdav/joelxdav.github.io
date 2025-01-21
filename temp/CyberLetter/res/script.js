////////START////////////

//// LOCAL STORAGE TIPS /////////////////////////
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
	document.getElementById("pw").style.zIndex = 1; 
	document.getElementById("nothin").style.zIndex = -9; 
	const LATEST_VERSION = "3.0";
	const COUNT_LIMIT = 3;
	let play_count = localStorage.getItem("PLAY_COUNT") == null ? 0 : parseInt(localStorage.getItem("PLAY_COUNT"));
	let version = localStorage.getItem("VERSION"); 
	if (version == LATEST_VERSION && play_count >= COUNT_LIMIT) {
		// do nothing
	} else {
		if (version != LATEST_VERSION) {play_count = -1;}
		writeLetter(); 
		localStorage.setItem("VERSION", LATEST_VERSION);
		localStorage.setItem("PLAY_COUNT", play_count+1);
	} 
	sky(); // background is now based on time of day
} 

// enter secret code
setTimeout(function() {
	// check screen size
	if (document.body.clientWidth >= 750 && document.body.clientHeight >= 350) {	
		// check local storage for user and secret code
		if (localStorage.getItem("firstVisit") === "false") {
			let nickname = localStorage.getItem("nickname"); 
			//alert("Welcome back, " + nickname); //////////////////////////////
			//// OPEN UP ///////////////////////////////////////////////////////
			openUp(); 
		} else {
			const secretWord = "bakersfield"; 
			let pw = prompt("what's the secret word?");	
			//check secret code
			if (pw.toLowerCase() == secretWord){ 
				alert("correct!"); 
				localStorage.setItem("firstVisit", "false");
				let nickname = prompt("pick a nickname?");	
				localStorage.setItem("nickname", nickname);
				alert("thanks, " + nickname); 
				openUp();
			} else { // seceret code
				alert("sorry incorrect. refresh the page and try again."); 
			}
		} // local storage
	} else { // screen size
		alert("Uh-Oh! Your screen size may be too small. Please view this page on a Desktop browser. Preferably Chrome."); 
		document.getElementById("nothin").style.opacity = 1; 
	}
}, 1000);



		
//// SKY BACKGROUND - TIME OF DAY ////////////
let skyRunCount = 0;
function sky() {
	/*
	var h = 0 - $("#sky").height();
	var sh = $(window).height();
	var m = (h+sh) + "px";
	$("#sky").animate({top: m}, 100000);
	*/
	if (skyRunCount == 0) {
		skyRunCount++; 
	} else if (skyRunCount == 1) {
		$('#sky').css({'transition': '5s'});
	}
	const today = new Date();	
	let hour = today.getHours();

	if (hour >= 21 && hour <= 23) { 
		$('#sky').css({'top': '-8400px'});
		$("#moon-stars").animate({opacity: "1"}, 5000); 
	} else if (hour == 20) {
		$('#sky').css({'top': '-8000px'}); 
	} else if (hour == 19) {
		$('#sky').css({'top': '-7000px'}); 
	} else if (hour == 18) {
		$('#sky').css({'top': '-6000px'}); 
	} else if (hour == 17) {
		$('#sky').css({'top': '-5300px'}); 
	} else if (hour == 16) {
		$('#sky').css({'top': '-4800px'}); 
	} else if (hour >= 12 && hour <= 15) {
		$('#sky').css({'top': '-4300px'}); 
	} else if (hour >= 8 && hour <= 11) {
		$('#sky').css({'top': '-3300px'}); 
	} else if (hour >= 5 && hour <= 7) {
		$('#sky').css({'top': '-1500px'}); 
	} else if (hour == 4) {
		$('#sky').css({'top': '-750px'}); 
		$("#moon-stars").animate({opacity: "1"}, 5000); 
	} else if (hour >= 0 && hour <= 3) {
		$('#sky').css({'top': '-100px'}); 
		$("#moon-stars").animate({opacity: "1"}, 5000); 
	} 

	setTimeout(sky, 300000); // check every 5 minutes 
}



//// MOON & STARS GIF /////////////////
/*
setTimeout(function(){
	$("#moon-stars").animate({opacity: "1"}, 5000); 
	//$("body").append('<div id="link"><a href="http://dimensionalhearts.tumblr.com/ask">ask me anything</a>&nbsp;&nbsp;<a href="https://open.spotify.com/user/jedpro/playlist/4Whcut8UOi5Y2VR95D1KRB">listen to a playlist</a></div>'); 
	//$("#link").animate({opacity: "1"}, 5000); 	
}, 55000); 
*/



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
setTimeout(moments, 250); 

