let reminders = [];
let localStoragePath = chrome.runtime.id

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({reminders});	
	chrome.alarms.clearAll(result => {console.log("Initialze: Alarms cleared")})

});

console.log(chrome.runtime.id)

chrome.storage.sync.get({reminders:[]},function(result){
	this.reminders = result.reminders;
	console.log(this.reminders);
});

chrome.storage.onChanged.addListener(function(changes, namespace){
	if ("reminders" in changes){
		chrome.alarms.getAll(alarmArray => clearAlarmReminders(alarmArray));
		oldRemind = changes.reminders.oldValue;
		newRemind = changes.reminders.newValue;
		this.reminders = [];
/*		console.log("Old Reminders:")
		for (var i = 0; i < oldRemind.length; i++){
			reminder = [Date(oldRemind[i][0]),oldRemind[i][1]]
			console.log(reminder)
		}*/
//		console.log("New Reminders:")
		for (var i = 0; i < newRemind.length; i++){
			reminder = [newRemind[i][0],newRemind[i][1]]
//			console.log(reminder)
			this.reminders.push(reminder);
		}
		console.log("Final values:")
		console.log(this.reminders)
		for (var i = 0; i < this.reminders.length; i++){
			console.log("New alarm made!")
			reminder = this.reminders[i]
//			console.log(this.reminders[i])			
			console.log("Time to Fire:")
			time = new Date(reminder[0]);
//			console.log((new Date(reminder[0])).getTime()-Date.now())
			alarmInfo = {
				when: time.getTime()
			}
			chrome.alarms.create(("reminder/" + reminder[0] + reminder[1]),{when:time.getTime()})
		}
	}
});

chrome.alarms.onAlarm.addListener(onAlarm)

function onAlarm(alarm){
//  There is nothing in the API to distinguish between alarms.
//  Add your "type" in the alarm's name and check for it manually.
//  Also suggest making some data in a string and hiding it in the alarm name.
console.log("Alarm fired: " + alarm.name);

	if (alarm.name.includes('reminder/')){
		chrome.windows.create({url:'chrome-extension://' + localStoragePath + '/reminderDisplay.html', type:'popup', height:200, width:400})
		"2021-04-25T00:14:00"
		reminderDate = alarm.name.substring(9,28)
		reminderString = alarm.name.substring(28)
		console.log([reminderDate,reminderString]);

		for (var i = 0; i < this.reminders.length;i++){
			console.log(this.reminders[i])
			if (JSON.stringify(this.reminders[i]) == JSON.stringify([reminderDate,reminderString])){
				console.log("Match")
				activeReminder = this.reminders[i]
//				console.log(activeReminder[0])
//				console.log(activeReminder[1])
				setTimeout(sendMessage.bind(null,reminderString,reminderDate),300);

			}
		}
	}
	if (alarm.name.includes('pomodoro/')){
		chrome.windows.create({url:'chrome-extension://' + localStoragePath + '/pomodoroDisplay.html', type:'popup', height:200, width:400})
		if (alarm.name.includes('work')){
			setTimeout(sendPomodoroMessage.bind(null,false),300)
		}
		else{
			setTimeout(sendPomodoroMessage.bind(null,true),300)
		}
	}
}

function sendMessage(text,time){
	chrome.runtime.sendMessage({
		msg: "newActiveReminder",
		data:{
			reminderText: text,
			reminderTime: time
			}
		}, (response) => console.log(response));
	console.log("clear")
	console.log(text + time)
	removeReminder(text,time)
}

function removeReminder(reminderText,reminderDate){
	for (var i = 0; i < this.reminders.length; i++){
		if (JSON.stringify(this.reminders[0]) == JSON.stringify([reminderDate,reminderText])){
			this.reminders.splice(i,1);

      		chrome.storage.sync.set({reminders:this.reminders},function(){
        		console.log('Reminder removed');
        		console.log(this.reminders)
      		});

		}
	}
}

function clearAlarmReminders(alarmList){
	console.log("Clearing previous alarms:")
	for (var i = 0; i < alarmList.length; i++){
		if (alarmList[i].name.includes("reminder/")){
			chrome.alarms.clear(alarmList[i].name)
			console.log("Alarm cleared: " + alarmList[i].name)
		}
	}
}

chrome.runtime.onMessage.addListener(
	async function(request,sender,sendResponse){
//		sendResponse("Message sent");
		console.log("Message recieved: " + request.msg)
//		console.log(request.data)
		
		if (request.msg === "pomodoroAlarmSet"){
			chrome.alarms.clear("pomodoro/work");
			chrome.alarms.clear("pomodoro/break");
			chrome.alarms.create("pomodoro/work",{when: Date.now()+request.data.workTimer,periodInMinutes:30})
			chrome.alarms.create("pomodoro/break",{when:Date.now()+request.data.breakTimer,periodInMinutes:30})

			sendResponse("Pomodoro Alarms set, first alarm at: " + new Date(Date.now()+request.data.workTimer).toString());
		}
		if (request.msg === "pomodoroAlarmClear"){
			chrome.alarms.clear("pomodoro/work");
			chrome.alarms.clear("pomodoro/break");
			sendResponse("Pomodoro Alarms cleared")
		}
		if (request.msg === "pomodoroAlarmGet"){
			sendTimers()
		}
	})

function sendPomodoroMessage(breakPeriodCheck){
	chrome.runtime.sendMessage({
		msg: "pomodoroCleared",
		data:{
			breakPeriodCheck: breakPeriodCheck
			}
		}, (response) => console.log(response));
	console.log("clear")
	console.log(breakPeriodCheck)
}

function sendTimers(){
	chrome.alarms.getAll(alarmList => {
		let workTime = undefined;
		let breakTime = undefined;
		for(i = 0; i < alarmList.length; i++){
			if (alarmList[i].name == "pomodoro/work"){
				workTime = alarmList[i].scheduledTime;
			}
			if (alarmList[i].name == "pomodoro/break"){
				breakTime = alarmList[i].scheduledTime;
			}
		}
		
		chrome.runtime.sendMessage({
			msg: "timerUpdate",
			data:{
				workTimer: workTime,
				breakTimer: breakTime
				}
			}, (response) => console.log(response));
		console.log("clear")
	});

}