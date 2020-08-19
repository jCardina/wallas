

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


let openServiceDetails = function(service) {


	service.addEventListener("mousedown", function(event) {
		event.preventDefault();

	});

	service.addEventListener("keyup", function(event) {
		if (event.keyCode == 13) {
			service.click();
		}
	});

	service.addEventListener("click", function(event) {


		if (!service.classList.contains("selected")) {

			let services = Array.from(document.querySelectorAll(".services div"));

			services.forEach(serv => {
				serv.classList.remove("selected");
			});
		}

		service.classList.toggle("selected");

	});
	

}


let createServices = function() {

	let container = document.getElementById("servicesCont");


	let services = [
	{
		icon: "fas fa-language",
		title: "Traducción de textos",
		description: "Servicios de traducción de textos técnico-científicos y literarios",
		pOne: "",
		pTwo: ""
	},
	{
		icon: "fas fa-balance-scale",
		title: "Traducción pública",
		description: "Servicios de traducción de textos legales",
		pOne: "",
		pTwo: ""
	},
	{
		icon: "far fa-file-alt",
		title: "Subtitulado",
		description: "Servicios de transcripción, traducción y temporización",
		pOne: "Producimos subtítulos electrónicos para todo tipo de contenido audiovisual de cine,  televisión y plataformas de internet. Contamos con un equipo de traductores, editores y correctores, especializados en traducción audiovisual y generación de subtítulos en múltiples extensiones.",
		pTwo: "Nuestra oferta multilingüe incluye los siguientes idiomas: español, inglés, francés, portugués e italiano."
	},
	{
		icon: "fas fa-closed-captioning",
		title: "SDPPS",
		description: "Servicios de subtitulado descriptivo para personas sordas o hipoacúsicas y subtitulado oculto",
		pOne: "Ofrecemos un servicio de subtítulos ocultos de excelente calidad en español, inglés, portugués y francés en el tiempo que usted lo precise.",
		pTwo: "Buscamos hacer su mensaje realmente accesible siguiendo los requerimientos necesarios para lograr un producto de excelencia."
	},
	{
		icon: "fa fa-film",
		title: "Guiones para doblaje",
		description: "Servicios de traducción y adaptación para doblaje",
		pOne: "",
		pTwo: ""
	},
	{
		icon: "fas fa-comments",
		title: "Guiones de audiodescripción",
		description: "Servicios de elaboración de guiones de audiodescripción para personas ciegas o con baja visión",
		pOne: "",
		pTwo: ""
	},
	{
		icon: "fas fa-gamepad",
		title: "Localización de videojuegos",
		description: "Servicios de localización de videojuegos y plataformas en línea",
		pOne: "",
		pTwo: ""
	},
	{
		icon: "fas fa-book-open",
		title: "Revisión de textos",
		description: "Servicios de revisión y corrección de textos",
		pOne: "",
		pTwo: ""
	}
	
	];



	services.forEach(service => {

		let card = document.createElement("div");
		card.setAttribute("tabindex", "0");

		let icon = document.createElement("i");
		icon.className = service.icon;

		let title = document.createElement("h3");
		title.textContent = service.title;

		let description = document.createElement("p");
		description.textContent = service.description;


		let pOne = document.createElement("p");
		pOne.textContent = service.pOne;
		pOne.className = "moreInfo";

		let pTwo = document.createElement("p");
		pTwo.textContent = service.pTwo;
		pTwo.className = "moreInfo";
		

		openServiceDetails(card);

		container.appendChild(card);
		card.appendChild(icon);
		card.appendChild(title);
		card.appendChild(description);
		card.appendChild(pOne);
		card.appendChild(pTwo);

		//check if pone and ptwo have content

	});



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

	let services = Array.from(document.querySelectorAll(".services div"));

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
		description: [
		{
			title:'##Traductora Técnica, Científica y Literaria en idioma inglés',
			inst:'##ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		},
		{
			title: 'Especialización Superior en Textos Audiovisuales y Accesibilidad',
			inst: 'ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		}
		],
		cv: "./docs/placeholder-cv.pdf"
	},
	{
		name: "Valentina Oliva",
		photo: "./images/placeholder.jpg",
		description: [
		{
			title:'Traductora Técnica, Científica y Literaria en idioma inglés',
			inst:'Universidad del Museo Social Argentino'
		},
		{
			title:'Profesora de italiano',
			inst:''
		},
		{
			title: 'Especialización Superior en Textos Audiovisuales y Accesibilidad',
			inst: 'ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		}
		],
		cv: "./docs/placeholder-cv.pdf"
	},
	{
		name: "Camila Dulce",
		photo: "./images/placeholder.jpg",
		description: [
		{
			title:'Traductora Técnica, Científica y Literaria en idioma inglés',
			inst:'ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		},
		{
			title: 'Especialización Superior en Textos Audiovisuales y Accesibilidad',
			inst: 'ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		}
		],
		cv: "./docs/placeholder-cv.pdf"
	},
	{
		name: "María Fernanda Ortiz",
		photo: "./images/placeholder.jpg",
		description: [
		{
			title:'##Traductora Técnica, Científica y Literaria en idioma inglés',
			inst:'##ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		},
		{
			title: 'Especialización Superior en Textos Audiovisuales y Accesibilidad',
			inst: 'ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		}
		],
		cv: "./docs/placeholder-cv.pdf"
	},
	{
		name: "Laura Wainfeld",
		photo: "./images/placeholder.jpg",
		description: [
		{
			title:'Traductora Técnica, Científica y Literaria en idioma francés',
			inst:'IES en Lenguas Vivas “Juan Ramón Fernández”'
		},
		{
			title:'Profesora de francés',
			inst:'IS del Profesorado “Dr. Joaquín V. González”'
		},
		{
			title: 'Especialización Superior en Textos Audiovisuales y Accesibilidad',
			inst: 'ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		}
		],
		cv: "./docs/placeholder-cv.pdf"
	},
	{
		name: "Diana Calfa",
		photo: "./images/placeholder.jpg",
		description: [
		{
			title:'Traductora Técnica, Científica y Literaria en idioma inglés',
			inst:'IES en Lenguas Vivas “Juan Ramón Fernández”'
		},
		{
			title:'Traductora Pública en idioma inglés',
			inst:'Universidad de Buenos Aires'
		},
		{
			title:'Traductora Pública en idioma portugués',
			inst:'Universidad de Buenos Aires'
		},
		{
			title: 'Especialización Superior en Textos Audiovisuales y Accesibilidad',
			inst: 'ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		}
		],
		cv: "./docs/placeholder-cv.pdf"
	},
	{
		name: "Carolina Jiménez",
		photo: "./images/placeholder.jpg",
		description: [
		{
			title:'Traductora Técnica, Científica y Literaria en idioma inglés',
			inst:'IES en Lenguas Vivas “Juan Ramón Fernández”'
		},
		{
			title: 'Especialización Superior en Textos Audiovisuales y Accesibilidad',
			inst: 'ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		}
		],
		cv: "./docs/placeholder-cv.pdf"
	}

	];



	profiles.forEach(profile => {

		let card = document.createElement("div");

		let photo = document.createElement("img");
		photo.alt = profile.name;
		photo.title = profile.name;
		photo.src = profile.photo;
		photo.className = "profilePic";

		let name = document.createElement("h4");
		name.textContent = profile.name;

		let textBox = document.createElement("div");
		textBox.style.minHeight = "230px";


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
		card.appendChild(textBox);

		profile.description.forEach(elm => {

			let title = document.createElement("p");
			title.textContent = elm.title;

			let inst = document.createElement("p");
			inst.textContent = elm.inst;
			inst.className = "institution";


			textBox.appendChild(title);
			textBox.appendChild(inst);
		});

		card.appendChild(cv);

	});
}



createServices();
createProfiles();
closeMenuOnSelection();
loop();
window.addEventListener("resize", loop);

setTimeout(function() {

	window.addEventListener('scroll', ()=> {
		loop();
		console.log("loop");
	});
}, 100);

//add on load

// add auto-close menu /services and on display none?