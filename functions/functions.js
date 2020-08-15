

let goToContactDetails = document.getElementById("contactBtn").addEventListener("click", function(event) {
	window.location.href = "#contacto";
});


let toggleHamMenu = document.getElementById("menuBtn").addEventListener("click", function(event) {

	this.classList.toggle("change");
	document.getElementById("menu").classList.toggle("open");

});

let services = Array.from(document.querySelectorAll(".services div"));

let openServiceDetails = function() {

	for (i = 0; i < services.length; i++) {
		
		services[i].addEventListener("click", function(event) {

			if (!this.classList.contains("selected")) {

				services.forEach(service => {
					service.classList.remove("selected");
				});
			}

			this.classList.toggle("selected");
			// console.log(this.childNodes)

			// for (j = 0; j < this.children.length; j++) {

			// 	if (this.children[j].classList.contains("moreInfo")) {
			// 		this.children[j].classList.toggle("selectedb");
			// 		break;
			// 	}        
			// }

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

closeMenuOnSelection();
openServiceDetails();

// add auto-close menu