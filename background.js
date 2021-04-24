let color = '#3aa757';
let reminders = [];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  chrome.storage.sync.set({ reminders});
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
		console.log("Old Reminders:")
		for (var i = 0; i < oldRemind.length; i++){
			reminder = [Date(oldRemind[i][0]).toString(),oldRemind[i][1]]
			console.log(reminder)
		}
		console.log("New Reminders:")
		for (var i = 0; i < newRemind.length; i++){
			reminder = [Date(newRemind[i][0]).toString(),newRemind[i][1]]
			console.log(reminder)
		}
	}
});

chrome.alarms.onAlarm.addListener(function( alarm ) {
  console.log("Got an alarm!", alarm);
});