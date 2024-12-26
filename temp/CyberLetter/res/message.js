//// LETTER /////////////////////
var rite = setInterval(function(){ var o=null }, 9999); 
clearInterval(rite);

function letter(a,l,i) { 
	function wrt() {
		if (i < l) {
			var b = a.substr(0,1);
			
	/*		// Pausers //
			if (b=="." || b=="?" || b=="!") {
				clearInterval(rite);
				setTimeout(function(){
					rite = setInterval(function(){ wrt() }, 25);
				}, 300);
			}   
	*/		
			// Astricks // pause for 3 seconds then clear
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
		
			// Pause 1.5 seconds then continue
			if (b=="^") {
				clearInterval(rite);
				b="";
				a = a.slice(1,a.length);
				setTimeout(function(){
			//		$("#x").animate({opacity: "0"}, 500);
			//		setTimeout(function(){ document.getElementById("x").innerHTML=""}, 510);
					setTimeout(function(){ rite = setInterval(function(){ wrt() }, 25); }, 500);
				}, 1500 );
			}
			
			
			
		// WRITE //
			$("#x").css("opacity", "1");
			document.getElementById("x").innerHTML += b;
			a = a.slice(1,a.length);
			i++;   
		///////////
			
				
		} else {
			clearInterval(rite);
			setTimeout(function(){
				$("#x").animate({opacity: "0"}, 500);
				setTimeout(function(){document.getElementById("x").innerHTML=""}, 510);
			}, (l*50) );
		}
	}
	rite = setInterval(function(){ wrt() }, 25);
}


//// MESSAGES 
var intro = "Willkommen, Elli! * I wanted to make you this cyber letter, ^ because I love you dearly * ...also the Canadian Post Office is actin' unsavory rn^ , so yeah, had to go the cyber route :P ^ * But I love you baby. ^ I love you so much. * I feel so blessed to have you and I can't wait to spend the rest of my life with you. ^ * Thank you for saying, \"Yes.\" ^ * Thank you for being who God made you. ^ * Take care^ , meine schatzi^ , meine liebe^ , my Elli ♡ ^ ^ * Fun Tip: ^ You can move your lil' person back and forth with the arrow keys. ^ * Bye for now (: ^  *";

var poem = "AUTUMN BLOOM ^ ^ * i'd not known a girl like you existed/ ^ A flower buried when I searched for it/ * High and low music, near and far film scenes/ ^ No sign of blooms, not while he's wandering/ * I was beginning to give up on her/ ^ All the water and wandering for naught/ ^ All the sense and patience I had been taught/ ^ Seasons of still, till the harvest is wrought/ * Spring comes then Summer, still no sign of blooms/ ^ Till orange-red-yellow have painted the leaves/ ^ ^ ^ * ^ ^ So I have found, not a second too soon/ It's in fact autumn when that flower blooms/ ^ ^ ^ *";

var msg = "";	

var ask = "";





//// WRITE LETTERS TIMERS ///////////////////


function begin() {
	setTimeout(function(){ 
		letter(intro, intro.length, 0); 
		/*
		setTimeout(function(){
			$("#x").css("opacity", "1");
			$("#x").css("color", "#fff");
			$("#x").css("font-family", "Indie Flower");
			$("#x").css("text-align", "Center");
			letter(poem, poem.length, 0); 	
	
			setTimeout(function(){
				$("#x").css("opacity", "1");
				letter(msg, msg.length, 0); 
	
			}, 60000); //msg after poem
		}, 22000); //poem after intro
		*/
	}, 7000); //intro
		
	/*
	setTimeout(function(){
		$("body").append('<img src="http://static.tumblr.com/gqdu5pa/tRJopat3b/moon-stars.gif" id="ending" />');
		$("#ending").animate({opacity: "1"}, 5000); 	
		$("body").append('<div id="link"><a href="http://dimensionalhearts.tumblr.com/ask">ask me anything</a>&nbsp;&nbsp;<a href="https://open.spotify.com/user/jedpro/playlist/4Whcut8UOi5Y2VR95D1KRB">listen to a playlist</a></div>'); 
		$("#link").animate({opacity: "1"}, 5000); 	
	}, 50000);
	
	setTimeout(function(){
		$("#x").css("opacity", "1");
		letter(ask, ask.length, 0); 	
	}, 55000);
	*/

}



//// ENTER PW
setTimeout(function() {
	// check screen size
	if (document.body.clientWidth >= 750 && document.body.clientWidth >= 400) {	
		let pw = prompt("what's the secret word?");	
		if (pw.toLowerCase() == "bakersfield"){ 
			alert("that's correct! click OK to continue");
			document.getElementById("pw").style.transition = "5s"; 
			document.getElementById("pw").style.opacity = 0; 
			document.getElementById("pw").style.zIndex = -9; 
			begin();
		} else {
			alert("sorry incorrect. refresh the page and try again."); 
		}
	} else {
		alert("Uh-Oh! I detect that your screen size is too small. Please view this page on a Desktop browser. Preferably Chrome."); 
	}
}, 1000);




//// END 