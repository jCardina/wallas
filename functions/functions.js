

let goToContactDetails = document.getElementById("contactBtn").addEventListener("click", function(event) {
	window.location.href = "#contacto";
});


let toggleHamMenu = document.getElementById("menuBtn").addEventListener("click", function(event) {

	this.classList.toggle("change");
	document.getElementById("menu").classList.toggle("open");

});


let closeMenuOnSelection = function () {

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

// add auto-close menu