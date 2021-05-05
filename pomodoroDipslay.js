let recievedResponse = false;

chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse){
		sendResponse("Message sent");
//		console.log("Message recieved")
		if (request.msg === "pomodoroCleared" && !this.recievedResponse){
			this.recievedResponse = true;
//			console.log(request.data)
			pomodoroHeader = "Error"
			pomodoroDescription = "Error"
			if (request.data.breakPeriodCheck){
				pomodoroHeader = "Back to work!"
				pomodoroWork = "Next break in 15 minutes!"
			}
			else{
				pomodoroHeader = "Break time!"
				pomodoroWork = "See you in 15 minutes!"
			}
			let reminder = document.getElementById("reminder")
			let header = document.getElementById("header")
			header.innerHTML = pomodoroHeader
			reminder.innerHTML = "<p>" + reminderDescription + "</p>"
		}
	})