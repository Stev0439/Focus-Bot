let inputResponse = document.getElementById("inputResponse");
let createReminder = document.getElementById("createReminder");
let clearReminder = document.getElementById("clearReminder");

createReminder.addEventListener("click",newReminder())
clearReminder.addEventListener("click",clearReminders())

function newReminder(){
  return function(){
    let form = document.getElementById("reminderForm").elements
      var description = form[0].value
      var YMD = form[1].value.split("-")
      var HM = form[2].value.split(":")


    try{
      console.log(YMD[0].length)

      if (isNaN((YMD[0]))||YMD[0].length == 0) throw 'nonNum';
     // "Special use case: Year before 1999 breaks code"
      if (parseInt(YMD[0]) < 1900) throw '1900Error';

      if (isNaN((YMD[1]))||YMD[1].length == 0) throw 'nonNum';
      if (isNaN((YMD[2]))||YMD[2].length == 0) throw 'nonNum';
      if (isNaN((HM[0])) || HM[0].length == 0) throw 'nonNum';
      if (isNaN((HM[1])) || HM[1].length == 0) throw 'nonNum';
    }
    catch(err){
      if (err == '1900Error'){
          inputResponse.innerHTML = "Invalid input! (Years before 1900 break code)"  
      }
      else{
        inputResponse.innerHTML = "Invalid input! (Make sure to match template format)"
      }
      setTimeout(clearInputResponse.bind(null),4000)
      return
    }

    // "No 'trailingZeroes' for Year: 4 digits expected."
    var Year = YMD[0]
    var Month = trailingZeroes(2,YMD[1].length) + YMD[1]
    var Day = trailingZeroes(2,YMD[2].length) + YMD[2]

    var Hour = trailingZeroes(2,HM[0].length) + HM[0]
    // If necessary, make binary (AM/PM) switch to add 12 to Hour.    
    var Minute = trailingZeroes(2,HM[1].length) + HM[1]

    var inputStr = `${Year}-${Month}-${Day}T${Hour}:${Minute}:00`
    var date = new Date(inputStr)
    console.log(date.toString())
    if (isNaN(date)){
      inputResponse.innerHTML = "Invalid date!"
      setTimeout(clearInputResponse.bind(null),4000)
      return
    }


    var reminder = [inputStr,description]
    chrome.storage.sync.get({reminders:[]},function(result){
      result.reminders.push(reminder)
      chrome.storage.sync.set({reminders:result.reminders},function(){
//        console.log('Value uploaded');
//        console.log(reminder)
      });
    });
    inputResponse.innerHTML = "Reminder added!"
    setTimeout(clearInputResponse.bind(null),4000)    
  }
}

function clearReminders(){
  return function(){
    chrome.storage.sync.set({reminders:[]},function(){
//      console.log("Reminders reset");
    })
    inputResponse.innerHTML = "Reminders cleared!"
    setTimeout(clearInputResponse.bind(null),4000)
  }
}

function clearInputResponse(){
  inputResponse.innerHTML = ""
}

function trailingZeroes(expectedLength, inputLength){
  zeroes = ""
  for (var i = 0; i < (expectedLength - inputLength); i++){
    zeroes += "0"
  }
  return zeroes
}