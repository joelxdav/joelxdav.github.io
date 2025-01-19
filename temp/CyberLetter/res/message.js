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
var intro = "Hi again :) ^ There's been an update. * Use the DOWN arrow key to have a chat. ^ You can also check the console log to reveal the full conversation. * Have fun ;) *";

var poem = "";

var msg = "";	

var ask = "";





//// WRITE LETTERS TIMERS ///////////////////

function writeLetter() {
	//intro
	setTimeout(function(){ 
		letter(intro, intro.length, 0); 
	}, 5000);

/*
	//poem after intro
	setTimeout(function(){
		$("#x").css("opacity", "1");
		$("#x").css("color", "#fff");
		$("#x").css("font-family", "Indie Flower");
		$("#x").css("text-align", "Center");
		letter(poem, poem.length, 0); 	
	}, 22000); 
	
	//msg after poem
	setTimeout(function(){
		$("#x").css("opacity", "1");
		letter(msg, msg.length, 0); 
	}, 60000); 
	
	// ask
	setTimeout(function(){
		$("#x").css("opacity", "1");
		letter(ask, ask.length, 0); 	
	}, 55000);
*/

}



//// END 