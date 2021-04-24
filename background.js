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
});

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
		 console.log("New Reminders:")
		for (var i = 0; i < newRemind.length; i++){
			reminder = [new Date(newRemind[i][0]),newRemind[i][1]]
			console.log(reminder)
			this.reminders.push(reminder);
		}
		console.log("Final values:")
		console.log(this.reminders)
//		for (reminder in this.reminders){
//			console.log("New alarm made!")
//			console.log(reminder)
//			opts = {
//				type: "basic",
//				title: "Reminder for  " + reminder[0].getTime() + "!",
//				message: reminder[1]
//			}
//			chrome.notifications.create(reminder[0],opts,function(){})

//			newAlarm = setTimeout(reminderAlarm(reminder[0],reminder[1]),reminder[0].getTime()-Date.now())
			

//		}

	}
});

function reminderAlarm(time,description){
	description;

}