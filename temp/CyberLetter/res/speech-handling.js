////////START////////////


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
		let clearResponse = setTimeout(() => {	
			$("#sprite-joel-speech").css("opacity","0");
			$("#sprite-joel-speech-textbox").css("display","None");
			$("#sprite-joel-speech-textbox").val("");
		}, 5000); 
	}, 500); 
}








// GENERATE A RESPONSE 
function responseGenerator(type,message) {
	let responseArray = []; 

	switch(type) {
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
				"i miss you too", 
				"i miss you more"
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
				"i can't say much" 
			]; 
	}

	let i = Math.floor(Math.random() * responseArray.length);
	let response = responseArray[i]; 
	return response;
}










// INTERPRET SPEECH
function speechInterpretor(msg){ 
	let message = msg.toLowerCase();
	let interpretation = responseGenerator("generic response",message);

	// interpret elli's speech 
	if (message.includes("i") && (message.includes("love you")||message.includes("love u")||message.includes("luv you")||message.includes("luv u"))) {
		interpretation = responseGenerator("LOVE",message); 
		}
	if (message=="hi"||message.includes("hey")||message.includes("hello")||message.includes("hallo")) {
		interpretation = responseGenerator("HELLO",message); 
		}
	if (message.includes("?")||message.includes("how")||message.includes("what")||message.includes("where")||message.includes("when")||message.includes("who")||message.includes("why")) {
		interpretation = responseGenerator("QUESTION",message); 
		} 
	if (message.includes("!!")||message.includes("crazy")) {
		interpretation = responseGenerator("EXCLAIM",message); 
		}
	if (message.includes("i miss you")||message.includes("i miss u")) {
		interpretation = responseGenerator("MISS",message); 
		}

	// call the generator for a response
	respond(interpretation);
} 