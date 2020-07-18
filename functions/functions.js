

let goToContactDetails = document.getElementById("contactBtn").addEventListener("click", function(event) {
	window.location.href = "#contacto";
});


let toggleHamMenu = document.getElementById("menuBtn").addEventListener("click", function(event) {

	this.classList.toggle("change");
	document.getElementById("menu").classList.toggle("open");

	// cerrar menu clickeando en links

});