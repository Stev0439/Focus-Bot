let recievedResponse = false;


chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse){
		sendResponse("Message sent to pomodoroDisplayJS");
		console.log("Message recieved")
		if (request.msg === "pomodoroCleared" && !this.recievedResponse){
			this.recievedResponse = true;
//			console.log(request.data)
			pomodoroHeader = "Error"
			pomodoroDescription = "Error"
			if (request.data.breakPeriodCheck){
				pomodoroHeader = "Back to work!"
				pomodoroDescription = "Next break in 15 minutes!"
			}
			else{
				pomodoroHeader = "Break time!"
				pomodoroDescription = "See you in 15 minutes!"
			}
			let timer = document.getElementById("timer")
			let header = document.getElementById("header")
			header.innerHTML = pomodoroHeader
			timer.innerHTML = "<p>" + pomodoroDescription + "</p>"
		}
	})