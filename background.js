let color = '#3aa757';
let reminders = [];

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ color });
	chrome.storage.sync.set({reminders});	
	console.log('Default background color set to %cgreen', `color: ${color}`);

});

chrome.storage.sync.get({reminders:[]},function(result){
	this.reminders = result.reminders;
	console.log(this.reminders);
/*	let queryOptions = { active: true, currentWindow: true };
  	let [tab] = await chrome.tabs.query(queryOptions);
  	console.log(tab)
	chrome.scripting.executeScript({
		function: 'testJS.js'
	}) */

});

function showAlert(){
	alert('test');
}

chrome.storage.onChanged.addListener(function(changes, namespace){
	if ("reminders" in changes){
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
			chrome.alarms.create(("reminder/" + reminder[0] + reminder[1]),alarmInfo)


		}

	}
});

chrome.alarms.onAlarm.addListener(onAlarm)

function onAlarm(alarm){
//  There is nothing in the API to distinguish between alarms.
//  Add your "type" in the alarm's name and check for it manually.
console.log("Alarm  fired: " + alarm.name);

	if (alarm.name.includes('reminder/')){
		chrome.windows.create({url:'chrome-extension://npjobebofadkephmbmpkkinddlekmikj/reminderDisplay.html', type:'popup'})
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

function reminderAlarm(){
	console.log("Alarm fired:")
	chrome.windows.create({url:'chrome-extension://npjobebofadkephmbmpkkinddlekmikj/popup.html'})
}