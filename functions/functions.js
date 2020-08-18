

let goToContactDetails = document.getElementById("contactBtn").addEventListener("click", function(event) {
	window.location.href = "#contacto";
});

document.getElementById("contactBtn").addEventListener("mousedown", function(event) {
	event.preventDefault();
});

document.getElementById("menuBtn").addEventListener("mousedown", function(event) {
	event.preventDefault();
});


let toggleHamMenu = document.getElementById("menuBtn").addEventListener("click", function(event) {

	this.classList.toggle("change");
	document.getElementById("menu").classList.toggle("open");

});

let services = Array.from(document.querySelectorAll(".services div"));

let openServiceDetails = function() {

	for (i = 0; i < services.length; i++) {

		services[i].addEventListener("mousedown", function(event) {
			event.preventDefault();

		});

		services[i].addEventListener("keyup", function(event) {
			if (event.keyCode == 13) {
				this.click();
			}
		});
		
		services[i].addEventListener("click", function(event) {


			if (!this.classList.contains("selected")) {

				services.forEach(service => {
					service.classList.remove("selected");
				});
			}

			this.classList.toggle("selected");

		});
	}

}


let closeMenuOnSelection = function() {

	let menuBtn = document.getElementById("menuBtn");
	let items = document.getElementsByClassName("menuItem");

	for (i = 0; i < items.length; i++) {
		
		items[i].addEventListener("click", function(event) {

			menuBtn.classList.remove("change");
			document.getElementById("menu").classList.remove("open");

		});
	}
}



// var scroll = window.requestAnimationFrame ||
             // IE Fallback
             // function(callback){ window.setTimeout(callback, 1000/60)};
// var elementsToShow = document.querySelectorAll('.services div'); 

function loop() {

	services.forEach(function (element) {
		if (isElementInViewport(element)) {
			element.classList.add('is-visible');
		} else {
			element.classList.remove('is-visible');
		}
	});

	// let isVisible = services.every(service => service.classList.contains("is-visible"));

	// if (!isVisible) {
		// scroll(loop);
	// }

}

// Call the loop for the first time
// loop();

window.addEventListener('scroll', ()=> {

	setTimeout(function() {
		console.log("loop")
		loop();
	}, 50);
});


// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(element) {

	let rect = element.getBoundingClientRect();
	return (
		(rect.top <= 0
			&& rect.bottom >= 0)
		||
		(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.top <= (window.innerHeight || document.documentElement.clientHeight))
		||
		(rect.top >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
		);
}





closeMenuOnSelection();
openServiceDetails();
// loop();

// add auto-close menu