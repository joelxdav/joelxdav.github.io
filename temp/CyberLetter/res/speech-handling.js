////////START////////////

const USER = "MAE"; 
const BOT = "JFROG BOT"; 
let clearResponse; 

//// SAVE MESSAGE ///////////////////////////////// 
let messageFile = {
	user: [], 
	bot: [], 
	print: function(){ 
		for (let i=0; i < this.user.length; i++) {
			console.log(USER + ": " + this.user[i]);
			console.log(BOT + ": " + this.bot[i]);
		}
	}
}; 
console.log("To save this console log to a file, right-click on any whitespace and select \"Save as...\""); 
function saveMessage(msg, who) { 
	let newEntry = ("\n" + who + ": " + msg);
	console.log(newEntry); 
	
	switch(who) {
		case "MAE": 
			messageFile.user.push(msg);
		break;
		case "JFROG BOT": 
			messageFile.bot.push(msg); 
		break;
	}
}




//// INPUT SPEECH & BUBBLE HANDLING ///////////////////// 
document.addEventListener("keyup", (event) => {
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
		speechInterpretor(message); // INITIATE RESPONSE 
		saveMessage(message, USER); // SAVE MESSAGE 
		clearTimeout(clearResponse); 
		$("#sprite-elli-speech-textbox").val("");
	} 
});



// OUTPUT THE RESPONSE
function respond(response){ 
	setTimeout(function(){	
		let textLength = response.length; 
		if (textLength >=30) { 
			let textWidth = (textLength*4); 
			//let textHeight = 125; 
			let bubbleWidth = (textLength*4)+50; 
			//let bubbleHeight = 150; 
			$("#sprite-joel-speech-textbox").css("padding-left","20px");
			$("#sprite-joel-speech-textbox").css("width",textWidth+"px");
			//$("#sprite-joel-speech-textbox").css("height",textHeight+"px");
			$("#sprite-joel-speech").css("width",bubbleWidth+"px");
			//$("#sprite-joel-speech").css("height",bubbleHeight+"px");
		} else {
			$("#sprite-joel-speech-textbox").css("padding-left","10px");
			$("#sprite-joel-speech-textbox").css("width","125px");
			//$("#sprite-joel-speech-textbox").css("height","50px");
			$("#sprite-joel-speech").css("width","150px");
			//$("#sprite-joel-speech").css("height","100px");
		}
		$("#sprite-joel-speech").css("opacity","1");
		$("#sprite-joel-speech-textbox").css("display","Block");
		$("#sprite-joel-speech-textbox").val(response); // OUTPUT MESSAGE 
		
		//// RESPONSE PERIPHIALS //////////////////////////
		saveMessage(response, BOT); // SAVE MESSAGE 
		switch(localStorage.getItem("TOPIC")) {
			case "MOTORCYCLES": 
				$("#sprite-joel").attr("src","res/images/sprites/joel-motorbike.gif");
			break;
			default: 
				$("#sprite-joel").attr("src","res/images/sprites/sprite-joel-left.gif");
			break;
		}
		////////////////////////////////////////////////////

		clearResponse = setTimeout(() => {	
			$("#sprite-joel-speech").css("opacity","0");
			$("#sprite-joel-speech-textbox").css("display","None");
			$("#sprite-joel-speech-textbox").val("");
		}, 7000); 
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
				"i love you more", 
				"Explain." 
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
				"im not that learn-ed yet", 
				"idk", 
				"sorry, what?", 
				"*shrugs*", 
				"what does that mean?", 
				"good question. idk tho", 
				"how should i know", 
				"i wish i could answer that", 
				"you ask a lot of questions, huh", 
				"im a BOT. i don't really know. sry /:" 
			]; 
		break;
		case "YES_NO_QUESTION": 
			responseArray = [
				"no", 
				"Nein.", 
				"yes", 
				"mhm", 
				"Ja.", 
				"i wish" 
			]; 
		break;
		case "EXCLAIM": 
			responseArray = [
				"woah",
				"lol relax", 
				"heh...yehh", 
				"you seem excited"
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
				"you should text me and find out...tell me JFROG BOT sent you", 
				"if its a weekday afternoon, im working", 
				"on my faith journey", 
				"sojourning", 
				"being excited about the future", 
				"wanna talk about somn else?" 
			]; 
		break;
		case "MOTORCYCLES": 
			responseArray = [
				"your support meant so so much to me", 
				"still crazy i had 2 motorcycles", 
				"my bikes were cool huh", 
				"enough about my motorcycles, im in love with u", 
				"well the bikes were a lot of work, but also rewarding", 
				"if i could do it over.. i woulda kept em until you got to see them in person /:", 
				"i named one Odessa.. well it used to be Goldie like my dad's old car. But then i changed the panels to black, so yeah",  
				"i've searched a lot for a new bike to get...no picks yet", 
				"i'd give motorcycles up for you any day", 
				"you board yet?" 
			]; 
		break;
		case "MUSIC": 
			responseArray = [
				"vibes baby, vibes", 
				"i love finding new music that hits tha feels", 
				"sharing music feels good when the other person vibes with it",
				"ya gotta check out my Spotify", 
				"what kinda music u like?", 
				"what's a good song rn?", 
				"peep the top-right screen. there's a music icon now", 
				"we could change the topic if u want. ask me somn else"
			]; 
		break;
		case "ART": 
			responseArray = [
				"i used to draw a lot",
				"in HS i took an art class",
				"i have German crayons! (:",
				"what do you like to paint?",
				"art. cool.",
				"u amaze me", 
				"do u like Van Gogh? i do. sad he died poor tho", 
				"show me ur art somtime (:", 
				"water colors are tougher than acryllics", 
				"i hope im not boring you. what else can we talk about?" 
			]; 
		break;
		default: 
			responseArray = [
				"wanna hear some cool tunes, check out my Spotify", 
				"i'm glad you're here", 
				"?", 
				"life is good (:", 
				"how are ya?", 
				"noice", 
				"ok", 
				"i can't say much" , 
				"i wish i could say more", 
				"same", 
				"im still learning how to talk better.. ich lerne", 
				"u said '" + message + "' ??",
				"i miss my motorcycles tbh", 
				"back at ya", 
				"i probably miss you rn", 
				"what you up to?" 
			]; 
	}

	let i = Math.floor(Math.random() * responseArray.length);
	let response = responseArray[i]; 
	return response;
}


/*

nlp model should determine if response should be:
[command,statement,question]	
[proactive,reactive]
[{topics}]

*/




// INTERPRET SPEECH
function speechInterpretor(msg){ 
	let message = msg.toLowerCase();
	let topic = localStorage.getItem("TOPIC");
	let interpretation = responseGenerator(topic,message);

	// interpret elli's speech 
	if (message.split(" ")[0] == "did"||message.split(" ")[0] == "are"||message.split(" ")[0] == "will"||message.split(" ")[0] == "can") {
		interpretation = responseGenerator("YES_NO_QUESTION",message); 
		//localStorage.removeItem("TOPIC");
		} else
	if (message.includes("motorcycle")||message.includes("motorbike")||message.includes("your bikes")) {
		interpretation = responseGenerator("MOTORCYCLES",message); 
		localStorage.setItem("TOPIC", "MOTORCYCLES");
		} else
	if (message.includes("music")||message.includes("songs")||message.includes("spotify")) {
		interpretation = responseGenerator("MUSIC",message); 
		localStorage.setItem("TOPIC", "MUSIC");
		showSpotifyLink();
		} else
	if (message.includes("art")||message.includes("painting")||message.includes("water colors")||message.includes("water colours")) {
		interpretation = responseGenerator("ART",message); 
		localStorage.setItem("TOPIC", "ART");
		} else
	
	if (message.includes("?")||message.includes("how")||message.includes("what")||message.includes("where")||message.includes("when")||message.includes("who")||message.includes("why")) {
		interpretation = responseGenerator("QUESTION",message); 
		localStorage.removeItem("TOPIC");
		} else
	if (message.includes("what are you doin")||message.includes("what are you up to")||message.includes("what you up to")||message.includes("what ya doin")||message.includes("what ya up to")) {
		interpretation = responseGenerator("WHATYOUDOING",message); 
		localStorage.setItem("TOPIC", "WHATYOUDOING");
		} else
	
		if (message=="hi"||message.includes("hey")||message.includes("hello")||message.includes("hallo")) {
		interpretation = responseGenerator("HELLO",message); 
		localStorage.removeItem("TOPIC");
		} else
	if (message=="bye"||message.includes("see you later")||message.includes("see ya later")) {
		interpretation = responseGenerator("BYE",message); 
		localStorage.removeItem("TOPIC");
		} else 
	if (message.includes("!!")||message.includes("crazy")) {
		interpretation = responseGenerator("EXCLAIM",message); 
		localStorage.removeItem("TOPIC");
		} else
	if (message.includes("i miss you")||message.includes("i miss u")) {
		interpretation = responseGenerator("MISS",message); 
		localStorage.removeItem("TOPIC");
		} else
	if (message.includes("i") && (message.includes("love you")||message.includes("love u")||message.includes("luv you")||message.includes("luv u"))) {
		interpretation = responseGenerator("LOVE",message); 
		localStorage.removeItem("TOPIC");
		} 

	// call the generator for a response
	respond(interpretation);
} 



//// SHOW MUSIC ICON with SPOTIFY LINK ////////////
function showSpotifyLink() {
	const music = document.getElementById("music");
	music.style.opacity = 1;
	music.style.transform = "scaleX(-1)";
	setTimeout(function(){music.style.transform = "scaleX(1)"},1500);
}