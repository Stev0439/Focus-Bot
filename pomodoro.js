let startTime = document.getElementById("startTime");
let stopTime = document.getElementById("stopTime");
let pomodoroHour = document.getElementById("pomodoroHour");
let pomodoroMinute = document.getElementById("pomodoroMinute");


var tickers = [];
let display = [0,0];


// 'Initialize timer to default value'
pomodoroModeSet(0);
tickers.push(setInterval(tickerUpdate,1000));
pomodoroHour.innerHTML = display[0].toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false})
pomodoroMinute.innerHTML = display[1].toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false})

startTime.addEventListener("click",startTimers())
stopTime.addEventListener("click",stopTimers())

getTimers()

function startTimers(){
	return function(){
	stopTimers()();
	
	let workMinutes = 15*60*1000;
	let breakMinutes = (15*60*1000)+workMinutes;

	chrome.runtime.sendMessage({
		msg: 'pomodoroAlarmSet',
		data:{
			workTimer: workMinutes,
			breakTimer: breakMinutes
			}
		}, (response) => {
			console.log(response);
			pomodoroModeSet(1)
			display = [15,0];
			pomodoroHour.innerHTML = display[0].toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false})
			pomodoroMinute.innerHTML = display[1].toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false})
			tickers.push(setInterval(tickerUpdate,1000));
		});
	console.log("pomodoro start clear")
	}
}

function stopTimers(){
	return function(){
	while(tickers.length > 0){
		clearInterval(tickers.pop())
	}
	chrome.runtime.sendMessage({
		msg: 'pomodoroAlarmClear',
		data:{
			placeholder: "temp",
			}
		}, (response) => {
			console.log(response);
		});
	pomodoroModeSet(0)
	display = [0,0];
	pomodoroHour.innerHTML = display[0].toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false})
	pomodoroMinute.innerHTML = display[1].toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false})
	console.log("pomodoro stop clear")
	}
}

function getTimers(){
	// 'When opening popup.js, there is no record of current timer status.'
	// 'Call this on start to inititalize current timer if one is active.'
	
	chrome.runtime.sendMessage({
		msg: 'pomodoroAlarmGet',
		data:{
			placeholder: "temp",
			}
		}, (response) => {
		console.log(response);
		});
	console.log("pomodoro get clear")
}

// 'Javascript doesn't like array comparisons. This is a helper 'comparison' for tickerUpdate.'
const zeroDisplayCheck = (currentValue) => currentValue == 0;

function tickerUpdate(){
	if (!display.every(zeroDisplayCheck)){
		if (display[1] == 0){
			display[0] -= 1;
			display[1] = 60;
		}
		display[1] -= 1;

		// 'Update HTML elements'
		pomodoroHour.innerHTML = display[0].toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false})
		pomodoroMinute.innerHTML = display[1].toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false})
		// 'Activate code if ticker hits 0.'
		if (display.every(zeroDisplayCheck)){
			console.log("timerClear!")
		}
	}
	else{

		// 'Empty code, nothing should run if pomodoroTimer started empty.'
	}
}

function pomodoroModeSet(level){
	// 0 = no timer, 1 = work, -1 = break
	text = "Error"
	if (level == 0){
		text = "Waiting to Start..."
	}
	if (level == 1){
		text = "Pomodoro Work!"
	}
	if (level == -1){
		text = "Pomodoro Break!"
	}

	// replace Temp with elementID-HTML reference
	document.getElementById("pomodoroMode").innerHTML = text
}

chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse){
		sendResponse("Message sent to pomodoroJS");
		console.log("Message recieved")
		if (request.msg === "timerUpdate"){

			console.log(request.data)
			if (isNaN(request.data.workTimer) || isNaN(request.data.breakTimer)){
				console.log("No alerts to retrieve.")
				return;
			}
			rawWorkTime = request.data.workTimer
			rawBreakTime = request.data.breakTimer
			if (rawWorkTime < rawBreakTime){
				currTime = rawWorkTime - Date.now();
				pomodoroModeSet(1)
			}
			else{
				currTime = rawBreakTime - Date.now();
				pomodoroModeSet(-1)
			}

			currTimeSeconds = Math.round(currTime / 1000)
			currTimeMinutes = Math.floor(currTimeSeconds / 60)
			currTimeSeconds = currTime % 60;


			display = [currTimeMinutes,currTimeSeconds]
			console.log(display)
		}

	})