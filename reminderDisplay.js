let recievedResponse = false;
let reminderDescription = "";

chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse){
		sendResponse("Message sent");
//		console.log("Message recieved")
		if (request.msg === "newActiveReminder" && !this.recievedResponse){
			this.recievedResponse = true;
//			console.log(request.data)
			reminderDescription = request.data.reminderText
			reminderTime = request.data.reminderTime
			let reminder = document.getElementById("reminder")
			let header = document.getElementById("header")
			header.innerHTML = "Reminder for " + reminderTime + "!"
			reminder.innerHTML = "<p>" + reminderDescription + "</p>"
		}
	})