// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");
let tabcontent = document.getElementsByClassName("tabcontent");
let tablinks = document.getElementsByClassName("tablinks");


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
		tablinks[0].className += " active";
	}
}


// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
	chrome.storage.sync.get("color", ({ color }) => {
		document.body.style.backgroundColor = color;
	});
}
