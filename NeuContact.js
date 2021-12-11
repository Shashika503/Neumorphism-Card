var mousePosition;
	var offset;
	var isDown = false;
	var slide = document.getElementById('slider');

	
	const container2 = document.getElementById('neumorphism');

	function addNight(){
		container2.classList.add('night');
	}
	function removeNight() {
		container2.classList.remove('night');
	}