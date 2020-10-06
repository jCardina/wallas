

let goToContactDetails = document.getElementById("contactBtn").addEventListener("click", function(event) {
	window.location.href = "#contacto";
});


let preventFocusOnClick = function() {

	let buttons = Array.from(document.getElementsByTagName("button"));

	buttons.forEach( btn => {

		btn.addEventListener("mousedown", function(e) {
			e.preventDefault();
		});

	})
}

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



	let services = [ 
	{
		category: "tav",
		items: [
		{
			icon: "far fa-file-alt",
			title: "Subtitulado",
			description: "Transcripción, traducción y temporización",
			text: [
			{paragraph: "Subtitulado de series, películas de ficción o documentales, programas de TV, videos informativos, institucionales, didácticos o publicitarios, conferencias, entrevistas, focus group, entre otros."}
			// {paragraph: "Nuestra oferta multilingüe incluye los siguientes idiomas: español, inglés, francés, portugués e italiano."}
			]
		},
		{
			icon: "fa fa-film",
			title: "Guiones para doblaje",
			description: "Traducción y adaptación para doblaje",
			text: [
			{paragraph: "Transcripción, cuando no se disponga de guion, traducción y adaptación para doblaje."},
			{paragraph: "Elaboración de guiones para ser utilizados en la sala de doblaje, que respetan en todo momento la sincronía entre el nuevo audio y el video original."}
			]
		},
		{
			icon: "fas fa-gamepad",
			title: "Localización de videojuegos",
			description: "Localización de videojuegos y plataformas en línea",
			text: [{paragraph: "Adaptación de productos o servicios a un mercado específico, teniendo en cuenta aspectos culturales, sociales y técnicos del mercado de destino."}]
		},
		{
			icon: "far fa-file-code",
			title: "Localización de sitios web",
			description: "Localización de sitios y páginas web",
			text: [
			{paragraph: "Adaptación de productos o servicios a un mercado específico, teniendo en cuenta aspectos culturales, sociales y técnicos del mercado de destino."},
			{paragraph: "Se trabaja en contacto estrecho con el cliente para garantizar una traducción acorde con sus necesidades y en el menor tiempo posible, sin descuidar la calidad del resultado."}
			]
		}
		]
	},
	{
		category: "access",
		items: [
		{
			icon: "fas fa-closed-captioning",
			title: "SPPS",
			description: "Subtitulado descriptivo para personas sordas o hipoacúsicas y subtitulado oculto",
			text: [
			{paragraph: "Elaboración y temporización de subtítulos ocultos de excelente calidad."},
			{paragraph: "El objetivo es que el mensaje sea realmente accesible, siguiendo los requerimientos necesarios para lograr un producto de excelencia."}
			]
		},
		{
			icon: "fas fa-comments",
			title: "Guiones de audiodescripción",
			description: "Elaboración de guiones de audiodescripción para personas ciegas o con baja visión",
			text: [{paragraph: "A través de esta herramienta, es posible activar una pista de audio alternativa que facilita la comprensión de una escena con la finalidad de proporcionar información sobre la situación espacial, los gestos, actitudes, paisajes y vestuario."}]
		}	
		]
	},
	{
		category: "texts",
		items: [
		{
			icon: "fas fa-language",
			title: "Traducción de textos técnico-científicos y literarios",
			description: "Traducción de textos de todo tipo y formato",
			text: [{paragraph: "Traducción de manuales, tesis, artículos, novelas, folletos, entre otros."}]
		},
		{
			icon: "fas fa-balance-scale",
			title: "Traducción pública",
			description: "Traducción de textos legales con firma certificada",
			text: [
			{paragraph: "Traducción de textos de diferentes áreas, sellada y firmada por un traductor público matriculado en el Colegio de Traductores Públicos de la Ciudad de Buenos Aires o de la Provincia de Buenos Aires."},
			{paragraph: "La firma del traductor certifica el contenido de la traducción para que los documentos tengan validez ante las autoridades nacionales o extranjeras correspondientes."}
			]
		},
		{
			icon: "fas fa-book-open",
			title: "Revisión de textos",
			description: "Revisión y corrección de textos",
			text: [{paragraph: "Revisiones ortográficas, gramaticales y de estilo."}]
		}
		]
	}
	];

	

	services.forEach(service => {

		let container = document.getElementById(service.category);

		service.items.forEach(item => {


			let card = document.createElement("div");
			card.setAttribute("tabindex", "0");
			card.setAttribute("aria-label", item.title);

			let icon = document.createElement("i");
			icon.className = item.icon;

			let title = document.createElement("h3");
			title.textContent = item.title;

			let description = document.createElement("p");
			description.textContent = item.description;


			openServiceDetails(card);

			container.appendChild(card);
			card.appendChild(icon);
			card.appendChild(title);
			card.appendChild(description);


			item.text.forEach(elm => {

				let paragraph = document.createElement("p");
				paragraph.className = "moreInfo";
				paragraph.textContent = elm.paragraph;

				card.appendChild(paragraph);

			});

		});
		

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


	let profiles = Array.from(document.querySelectorAll("#biosCont > div"));

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
		photo: "./images/tamini.jpg",
		// description: [
		// {
		// 	title:'Traductora Técnica, Científica y Literaria en idioma inglés',
		// 	inst:'Universidad del Salvador'
		// },
		// {
		// 	title: 'Especialización Superior en Textos Audiovisuales y Accesibilidad',
		// 	inst: 'ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		// }
		// ],
		cv: "./docs/placeholder-cv.pdf"
	},
	{
		name: "Valentina Oliva",
		photo: "./images/placeholder.jpg",
		// description: [
		// {
		// 	title:'Traductora Técnica, Científica y Literaria en idioma inglés',
		// 	inst:'Universidad del Museo Social Argentino'
		// },
		// {
		// 	title:'Profesora de italiano',
		// 	inst:''
		// },
		// {
		// 	title: 'Especialización Superior en Textos Audiovisuales y Accesibilidad',
		// 	inst: 'ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		// }
		// ],
		cv: "./docs/placeholder-cv.pdf"
	},
	{
		name: "Camila Dulce",
		photo: "./images/placeholder.jpg",
		// description: [
		// {
		// 	title:'Traductora Técnica, Científica y Literaria en idioma inglés',
		// 	inst:'ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		// },
		// {
		// 	title: 'Especialización Superior en Textos Audiovisuales y Accesibilidad',
		// 	inst: 'ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		// }
		// ],
		cv: "./docs/placeholder-cv.pdf"
	},
	{
		name: "María Fernanda Ortiz",
		photo: "./images/placeholder.jpg",
		// description: [
		// {
		// 	title:'##Traductora Técnica, Científica y Literaria en idioma inglés',
		// 	inst:'##ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		// },
		// {
		// 	title: 'Especialización Superior en Textos Audiovisuales y Accesibilidad',
		// 	inst: 'ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		// }
		// ],
		cv: "./docs/placeholder-cv.pdf"
	},
	{
		name: "Laura Wainfeld",
		photo: "./images/wainfeld.jpg",
		// description: [
		// {
		// 	title:'Traductora Técnica, Científica y Literaria en idioma francés',
		// 	inst:'IES en Lenguas Vivas “Juan Ramón Fernández”'
		// },
		// {
		// 	title:'Profesora de francés',
		// 	inst:'IS del Profesorado “Dr. Joaquín V. González”'
		// },
		// {
		// 	title: 'Especialización Superior en Textos Audiovisuales y Accesibilidad',
		// 	inst: 'ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		// }
		// ],
		cv: "./docs/placeholder-cv.pdf"
	},
	{
		name: "Diana Calfa",
		photo: "./images/placeholder.jpg",
		// description: [
		// {
		// 	title:'Traductora Técnica, Científica y Literaria en idioma inglés',
		// 	inst:'IES en Lenguas Vivas “Juan Ramón Fernández”'
		// },
		// {
		// 	title:'Traductora Pública en idioma inglés',
		// 	inst:'Universidad de Buenos Aires'
		// },
		// {
		// 	title:'Traductora Pública en idioma portugués',
		// 	inst:'Universidad de Buenos Aires'
		// },
		// {
		// 	title: 'Especialización Superior en Textos Audiovisuales y Accesibilidad',
		// 	inst: 'ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		// }
		// ],
		cv: "./docs/placeholder-cv.pdf"
	},
	{
		name: "Carolina Jiménez",
		photo: "./images/placeholder.jpg",
		// description: [
		// {
		// 	title:'Traductora Técnica, Científica y Literaria en idioma inglés',
		// 	inst:'IES en Lenguas Vivas “Juan Ramón Fernández”'
		// },
		// {
		// 	title: 'Especialización Superior en Textos Audiovisuales y Accesibilidad',
		// 	inst: 'ENS en Lenguas Vivas “Sofía E. B. de Spangenberg”'
		// }
		// ],
		cv: "./docs/placeholder-cv.pdf"
	}

	];



	profiles.forEach(profile => {

		let card = document.createElement("div");

		let photo = document.createElement("img");
		photo.alt = profile.name;
		// photo.title = profile.name;
		photo.src = profile.photo;
		photo.className = "profilePic";

		let name = document.createElement("h4");
		name.textContent = profile.name;

		// let textBox = document.createElement("div");


		let cv = document.createElement("button");
		cv.textContent = "Más información";

		cv.addEventListener("click", function() {

			window.open(profile.cv,'_blank');
		});

		container.appendChild(card);
		card.appendChild(photo);
		card.appendChild(name);
		// card.appendChild(textBox);

		// profile.description.forEach(elm => {

		// 	let title = document.createElement("p");
		// 	title.textContent = elm.title;

		// 	let inst = document.createElement("p");
		// 	inst.textContent = elm.inst;
		// 	inst.className = "institution";


		// 	textBox.appendChild(title);
		// 	textBox.appendChild(inst);
		// }); //delete css and array info?

		card.appendChild(cv);

	});
}

let sendEmail = function(data) {

	const sent = fetch("https://wallas-tav-server.herokuapp.com/forms", {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		},

	})
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
		return data;
	})
	.catch((error) => {
		return error;
	})

	return sent;

}

let submitForm = async function() {

	let name = document.getElementById("inputName").value;	
	let lastname = document.getElementById("inputLastname").value;
	let email = document.getElementById("inputEmail").value;
	let message = document.getElementById("inputMsg").value;


	let data = {
		name: name,
		lastname: lastname,
		email: email,
		msg: message
	};
	
	let sent = await sendEmail(data);
	console.log(sent.status);

	if (sent.status != 200) {
		return false;
	} else {
		return true;
	}
	
}


document.getElementById("contactForm").addEventListener("submit", async function(e) {

	let btn = document.getElementById("sendForm");
	btn.disabled = true;

	e.preventDefault();
	let delivered = await submitForm();
	

	if (!delivered) {

		alert("No se pudo procesar la solicitud. Por favor intente más tarde."); //change
		btn.disabled = false;

		return false;
	}

	this.style.display = "none";
	document.getElementById("success").style.display = "flex";

	let inputs = Array.from(document.getElementsByClassName("inp"));

	inputs.forEach( elm => {
		elm.value = "";
	});

	btn.disabled = false;

	return false;
});

document.getElementById("newMsg").addEventListener("click", function(event) {

	document.getElementById("success").style.display = "none";
	document.getElementById("contactForm").style.display = "flex";
	
});


createServices();
createProfiles();
closeMenuOnSelection();
preventFocusOnClick();
loop();
window.addEventListener("resize", loop);

setTimeout(function() {

	window.addEventListener('scroll', ()=> {
		loop();
		console.log("loop");
	});
}, 100);



document.getElementById("darkmode").addEventListener("click", function(event) {
	
	let elements = document.querySelectorAll(".default");

	for(i = 0; i < elements.length; i++) {
		elements[i].classList.toggle("darkmode");
	}

	let logo = document.querySelector("#logo img");

	if(logo.classList.contains("darkmode")) {

		logo.src = "./images/logov5.png";

	} else {
		logo.src = "./images/logov4.png";
	}

	if(document.body.classList.contains("darkmode")) {
		localStorage.lightmode = "false";
	} else {
		localStorage.lightmode = "true";
	}


});



window.addEventListener("load", function(e) {



if(localStorage.lightmode) {

	let lightmode = localStorage.getItem("lightmode");

	if(lightmode == "false") {

		document.getElementById("darkmode").click();
	}

} else {

	localStorage.setItem("lightmode", "true");

}

});


document.getElementById("seeBios").addEventListener("click", function(e) {

	let icon = document.querySelector(".seeBios i");
	let container = document.querySelector(".bios");

	if(icon.classList.contains("fa-angle-up")) {

		icon.classList.remove("fa-angle-up");
		icon.classList.add("fa-angle-down");

		container.style.display = "flex";

	} else {

		icon.classList.add("fa-angle-up");
		icon.classList.remove("fa-angle-down");

		container.style.display = "none";

	}

});

//add on load

// add auto-close menu /services and on display none?
// document.getElementById("darkmode").click();
