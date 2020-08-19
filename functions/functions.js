

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

	services.forEach(element => {
		if (isElementInViewport(element)) {
			element.classList.add('is-visible');
		} else {
			element.classList.remove('is-visible');
		}
	});


	let profiles = Array.from(document.querySelectorAll("#biosCont div"));

	profiles.forEach(element => {
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

	let isInVP = (
		(rect.top <= 0 && rect.bottom >= 0) ||
		(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
		(rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
		);

	return isInVP;
}

// document.getElementById("more").addEventListener("click", function() {

// 	window.open('./docs/placeholder-cv.pdf','_blank');

// });


let createProfiles = function() {

	let container = document.getElementById("biosCont");


	let profiles = [
	{
		name: "Natalia Tamini",
		photo: "./images/placeholder.jpg",
		description: 'Traductora literaria y técnico-científica egresada del IES en Lenguas Vivas "Juan Ramón Fernández". Especialización en textos audiovisuales y accesibilidad.',
		cv: "./docs/placeholder-cv.pdf"
	},
	{
		name: "Valentina Oliva",
		photo: "./images/placeholder.jpg",
		description: 'Traductora literaria y técnico-científica egresada del IES en Lenguas Vivas "Juan Ramón Fernández". Especialización en textos audiovisuales y accesibilidad.',
		cv: "./docs/placeholder-cv.pdf"
	},
	{
		name: "Camila Dulce",
		photo: "./images/placeholder.jpg",
		description: 'Traductora literaria y técnico-científica egresada del IES en Lenguas Vivas "Juan Ramón Fernández". Especialización en textos audiovisuales y accesibilidad.',
		cv: "./docs/placeholder-cv.pdf"
	},
	{
		name: "María Fernanda Ortiz",
		photo: "./images/placeholder.jpg",
		description: 'Traductora literaria y técnico-científica egresada del IES en Lenguas Vivas "Juan Ramón Fernández". Especialización en textos audiovisuales y accesibilidad.',
		cv: "./docs/placeholder-cv.pdf"
	},
	{
		name: "Laura Wainfeld",
		photo: "./images/placeholder.jpg",
		description: 'Traductora literaria y técnico-científica egresada del IES en Lenguas Vivas "Juan Ramón Fernández". Especialización en textos audiovisuales y accesibilidad.',
		cv: "./docs/placeholder-cv.pdf"
	},
	{
		name: "Diana Calfa",
		photo: "./images/placeholder.jpg",
		description: 'Traductora literaria y técnico-científica egresada del IES en Lenguas Vivas "Juan Ramón Fernández". Especialización en textos audiovisuales y accesibilidad.',
		cv: "./docs/placeholder-cv.pdf"
	},
	{
		name: "Carolina Jiménez",
		photo: "./images/placeholder.jpg",
		description: 'Traductora literaria y técnico-científica egresada del IES en Lenguas Vivas "Juan Ramón Fernández". Especialización en textos audiovisuales y accesibilidad.',
		cv: "./docs/placeholder-cv.pdf"
	}

	];



	profiles.forEach(profile => {

		let card = document.createElement("div");

		let photo = document.createElement("img");
		photo.alt = profile.name;
		photo.title = profile.name;
		photo.src = profile.photo;
		photo.className = "profilePic"

		let name = document.createElement("h4");
		name.textContent = profile.name;

		let description = document.createElement("p");
		description.textContent = profile.description;

		let cv = document.createElement("button");
		cv.textContent = "Más información";

		cv.addEventListener("mousedown", function(e) {

			e.preventDefault();
		});

		cv.addEventListener("click", function() {

			window.open(profile.cv,'_blank');
		});

		container.appendChild(card);
		card.appendChild(photo);
		card.appendChild(name);
		card.appendChild(description);
		card.appendChild(cv);

	});
}




closeMenuOnSelection();
openServiceDetails();
loop();
window.addEventListener("resize", loop);
createProfiles();
//add on load

// add auto-close menu