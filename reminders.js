let displayTime = document.getElementById("displayTime");
let currTime = document.getElementById("currTime");
let createTime = document.getElementById("createTime");
let toggleAlarm = document.getElementById("toggleAlarm");

displayTime.addEventListener("click",setCurrTime())    
createTime.addEventListener("click",newTime())
toggleAlarm.addEventListener("click",getReminders())




function setCurrTime(){
  return function(){
    var time = new Date(currTime.innerHTML)
    console.log(time.toString())
    currTime.innerHTML = time.getTime()
    console.log('CurrClear')
  }
}

function newTime(){
  return function(){
    let form = document.getElementById("reminderForm").elements
    var description = form[0].value
    var YMD = form[1].value
    var HM = form[2].value
    // TODO: Make better Input -> Date conversions
    // "Right now it's very easy for valid inputs to be read as invalid."
    var Year = YMD.substring(0,4)
    var Month = YMD.substring(5,7)
    var Day = YMD.substring(8)
    var Hour = HM.substring(0,2)
    // If necessary, make binary (AM/PM) switch to add 12 to Hour.    
    var Minute = HM.substring(3)

    var date = new Date(`${Year}-${Month}-${Day}T${Hour}:${Minute}:00`)
    var reminder = [date,description]
    currTime.innerHTML = date.toString()
    chrome.storage.sync.get({reminders:[]},function(result){
      result.reminders.push(reminder)
      chrome.storage.sync.set({reminders:result.reminders},function(){
        console.log('Value uploaded');
      });
    });

/*    chrome.storage.sync.set({reminders:reminder}, function(){
      console.log('Value uploaded');
    });*/

    chrome.storage.sync.get({reminders:[]},function(result){
      console.log(result.reminders);
      response = result.reminders;
    });  
  }
}

function getReminders(){
  return function(){
    chrome.storage.sync.get({reminders:[]},function(result){
      console.log(Date(result.reminders[0][0]).toString());
    })
  }
}