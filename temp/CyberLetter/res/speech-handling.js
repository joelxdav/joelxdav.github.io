////////START////////////


//// SAVE MESSAGE ///////////////////////////////// 
let messageFile = ""; 
console.log("To save this console log to a file, right-click on any whitespace and select \"Save as...\""); 
function saveMessage(msg, who) { 
	let newEntry = ("\n" + who + ": " + msg);
	messageFile += newEntry; 
	console.log(newEntry); 
}

function printMessageFile(){ 
	console.log(messageFile); 
	alert("See console log for conversation"); 
}




//// SPEECH & BUBBLE HANDLING ///////////////////// 
document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowDown") {
		$("#sprite-elli-speech").css("opacity","1");
		$("#sprite-elli-speech-textbox").css("width","125px");
		$("#sprite-elli-speech-textbox").css("height","50px");
		$("#sprite-elli-speech-textbox").css("display","Block");
		$("#sprite-elli-speech-textbox").focus();
	} else if (event.key === "ArrowUp" || event.key === "ArrowLeft" || event.key === "ArrowRight") {
		$("#sprite-elli-speech").css("opacity","0");
		$("#sprite-elli-speech-textbox").css("display","None");
		$("#sprite-elli-speech-textbox").val("");
	} else if (event.key === "Enter" && $("#sprite-elli-speech-textbox").val() != "") {
		let message = $("#sprite-elli-speech-textbox").val();
		$("#sprite-elli-speech-textbox").val("");
		speechInterpretor(message); // INITIATE RESPONSE 
		saveMessage(message, "MAE"); // SAVE MESSAGE 
	} 
});




// OUTPUT THE RESPONSE
function respond(response){ 
	setTimeout(function(){	
		//clearTimeout(clearResponse); 
		$("#sprite-joel-speech").css("opacity","1");
		$("#sprite-joel-speech-textbox").css("width","125px");
		$("#sprite-joel-speech-textbox").css("height","50px");
		$("#sprite-joel-speech-textbox").css("display","Block"); 
		$("#sprite-joel-speech-textbox").val(response);
		saveMessage(response, "JFROG BOT"); // SAVE MESSAGE
		let clearResponse = setTimeout(() => {	
			$("#sprite-joel-speech").css("opacity","0");
			$("#sprite-joel-speech-textbox").css("display","None");
			$("#sprite-joel-speech-textbox").val("");
		}, 5000); 
	}, 500); 
}








// GENERATE A RESPONSE 
function responseGenerator(topic,message) {
	let responseArray = []; 

	switch(topic) {
		case "LOVE": 
			responseArray = [
				"luv u 2", 
				"awh.. danke meine liebe",
				"oof", 
				"i love you too", 
				"i love you more"
			]; 
		break;
		case "HELLO": 
			responseArray = [
  				"hi",
				"hey there", 
				"hi Elli!", 
				"Hallo!"
			]; 
		break;
		case "BYE": 
			responseArray = [
  				"Bye bye",
				"awh..", 
				"Wait!", 
				"See ya 'round!"
			]; 
		break;
		case "QUESTION": 
			responseArray = [
				"idk",
				"*shrugs*",
				"good question. idk tho", 
				"how should i know", 
				"i wish i could answer that"
			]; 
		break;
		case "EXCLAIM": 
			responseArray = [
				"woah",
				"lol relax", 
				"heh...yehh"
			]; 
		break;
		case "MISS": 
			responseArray = [
				"awh *sad face*", 
				"there there", 
				"oof", 
				"i miss you lots", 
				"i miss you more"
			]; 
		break;
		case "WHATYOUDOING": 
			responseArray = [
				"i'm probably busy but also not", 
				"tryna build Rome in a day", 
				"thinking about you", 
				"stressin bout somn", 
				"idk", 
				"if its a weekday afternoon, im working", 
				"on my faith journey", 
				"sojourning", 
				"being excited to be married" 
			]; 
		break;
		case "MOTORCYCLES": 
			responseArray = [
				"THEY WERE SO COOL", 
				"well they were a lot of work.. but also rewarding", 
				"if i could do it over...maybe i woulda kept em. definitely until you got to see them in person /:", 
				"i named one Odessa.. well it used to be Goldie like my dad's muscle car. But then i changed the panels to black",  
				"your support of my motorcycles meant so much to me", 
				"still surreal i had two motorcycles" 
			]; 
		break;
		case "MUSIC": 
			responseArray = [
				"vibes baby, vibes", 
				"i love finding new music that hits tha feels", 
				"sharing music feels good when the other person vibes with it",
				"ya gotta check out my Spotify" 
			]; 
		break;
		default: 
			responseArray = [
				"*shrugs*",
				"Wilkommen!", 
				"i'm glad you're here", 
				"Fun Fact: ...heh idk", 
				"?", 
				"life is good (:", 
				"how are ya?", 
				"noice", 
				"ok", 
				"back at ya", 
				"i can't say much" , 
				"i wish i could say more", 
				"i probably miss you rn", 
				"wanna hear some cool tunes, check out my Spotify", 
				"i miss my motorcycles tbh" 
			]; 
	}

	let i = Math.floor(Math.random() * responseArray.length);
	let response = responseArray[i]; 
	return response;
}








// INTERPRET SPEECH
function speechInterpretor(msg){ 
	let message = msg.toLowerCase();
	let topic = localStorage.getItem("TOPIC");
	let interpretation = responseGenerator(topic,message);

	// interpret elli's speech 
	if (message=="hi"||message.includes("hey")||message.includes("hello")||message.includes("hallo")) {
		interpretation = responseGenerator("HELLO",message); 
		localStorage.removeItem("TOPIC");
		}
	if (message=="bye"||message.includes("see you later")||message.includes("see ya later")) {
		interpretation = responseGenerator("BYE",message); 
		localStorage.removeItem("TOPIC");
		}
	if (message.includes("?")||message.includes("how")||message.includes("what")||message.includes("where")||message.includes("when")||message.includes("who")||message.includes("why")) {
		interpretation = responseGenerator("QUESTION",message); 
		localStorage.removeItem("TOPIC");
		} 
	if (message.includes("!!")||message.includes("crazy")) {
		interpretation = responseGenerator("EXCLAIM",message); 
		localStorage.removeItem("TOPIC");
		}
	if (message.includes("i miss you")||message.includes("i miss u")) {
		interpretation = responseGenerator("MISS",message); 
		localStorage.removeItem("TOPIC");
		}
	if (message.includes("i") && (message.includes("love you")||message.includes("love u")||message.includes("luv you")||message.includes("luv u"))) {
		interpretation = responseGenerator("LOVE",message); 
		localStorage.removeItem("TOPIC");
		}
	if (message.includes("what are you doin")||message.includes("what are you up to")||message.includes("what you up to")||message.includes("what ya doin")||message.includes("what ya up to")) {
		interpretation = responseGenerator("WHATYOUDOING",message); 
		localStorage.setItem("TOPIC", "WHATYOUDOING");
		} 
	if (message.includes("your motorcycle")||message.includes("your bikes")) {
		interpretation = responseGenerator("MOTORCYCLES",message); 
		localStorage.setItem("TOPIC", "MOTORCYCLES");
		} 
	if (message.includes("music")||message.includes("songs")||message.includes("spotify")) {
		interpretation = responseGenerator("MUSIC",message); 
		localStorage.setItem("TOPIC", "MUSIC");
		showSpotifyLink();
		} 

	// call the generator for a response
	respond(interpretation);
} 


function showSpotifyLink() {
	const music = document.getElementById("music");
	music.style.opacity = 1;
	music.style.transform = "scaleX(-1)";
	setTimeout(function(){music.style.transform = "scaleX(1)"},1500);
}