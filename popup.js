let tabcontent = document.getElementsByClassName("tabcontent");
let tablinks = document.getElementsByClassName("tablinks");


for(var i = 0; i < tablinks.length;i++){
	tablinks[i].addEventListener("click",setTabContent(i))
}


function setTabContent(x){
	return function(){
		for (i = 0; i < tabcontent.length; i++) {
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