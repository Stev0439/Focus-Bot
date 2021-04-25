// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");
let tabcontent = document.getElementsByClassName("tabcontent");
let tablinks = document.getElementsByClassName("tablinks");
let start = document.getElementsByClassName("startB");

chrome.storage.sync.get("color", ({ color }) => {
	changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: setPageBackgroundColor,
	});
});

for(var i = 0; i < tablinks.length;i++){
	console.log(i)
	tablinks[i].addEventListener("click",setTabContent(i))		
}


function setTabContent(x){
	return function(){
		for (i = 0; i < tabcontent.length; i++) {
			console.log(i)
			tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		tabcontent[x].style.display = "block";
		tablinks[x].className += " active";
	}
}


// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
	chrome.storage.sync.get("color", ({ color }) => {
		document.body.style.backgroundColor = color;
	});
}

//Time Buttons
	//'Globabl' variables for these buttons
let runFunction = true;
let runFunctionNum = 0;
let timeElapsed = 0;
let minInSec = 0;
let minute = 0;
let second = 0;



function startWork(startMin,startSec){
	let countingMin = startMin;
	let countingSec = startSec;
	if(countingSec == 0 && countingMin != 0){
		countingMin = countingMin - 1;
		countingSec = 60;
		document.getElementById("testing1").innerHTML = countingMin;
		document.getElementById("testing2").innerHTML = countingSec;
		startWork(countingMin,countingSec);
	}
	else if(coutingSec != 0){
		countingSec = countingSec - 1;
		document.getElementById("testing1").innerHTML = countingMin;
		document.getElementById("testing2").innerHTML = countingSec;
		startWork(countingMin,countingSec);
	}
	else{
		document.getElementById("testing1").innerHTML = countingMin;
		document.getElementById("testing2").innerHTML = countingSec;
		//startBreak(a,b);
	}

}

//Start button event that starts stopwatch
function beginTiming(){
	//alert("I'm in the starting place");
		//alert("Getting to calling function");
			//increaseTime();
	startWork(6,0);

}

start[0].addEventListener("click", beginTiming);

/*
function increaseTime(){
	//alert("In the function");
	timeElapsed++;
	 //calculates how many minutes and seconds are included in the elapsed time
	//alert("Calculating time");
	if(timeElapsed>59){
		minute = timeElapsed%60;
		minInSec = minute*60;
		second = timeElapsed - minInSec;
		//alert("We have minutes");
		document.getElementById("testing1").innerHTML = "12";
		document.getElementById("testing2").innerHTML = second;
	}
	else{
		//alert("NO minutes");
		second = timeElapsed;
		document.getElementById("testing1").innerHTML = "12";
		document.getElementById("testing2").innerHTML = second;
	}

	//alert("I'm at writing");

	document.getElementById("testing1").innerHTML = "12";
	document.getElementById("testing2").innerHTML = second;
}
*/