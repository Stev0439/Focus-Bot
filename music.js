
	let classical = document.getElementById("classic");
	let lofiHH = document.getElementById("lofi");
	let animeO = document.getElementById("anime");
	let vGame = document.getElementById("game");

	function playMusic(music){
		if(music == 'c'){
			window.open('https://www.youtube.com/watch?v=jgpJVI3tDbY', '_blank');
		}
		else if(music == 'l'){
			window.open('https://www.youtube.com/watch?v=lTRiuFIWV54', '_blank');
		}
		else if(music == 'a'){
			window.open('https://www.youtube.com/watch?v=ds1ymGglJrc', '_blank');
		}
		else{
			window.open('https://www.youtube.com/watch?v=9KDedSseOkU','_blank');
		}
	}

	classical.addEventListener("click", playMusic.bind(null,'c'));
	lofiHH.addEventListener("click", playMusic.bind(null,'l'));
	animeO.addEventListener("click", playMusic.bind(null,'a'));
	vGame.addEventListener("click", playMusic.bind(null,'v'));
