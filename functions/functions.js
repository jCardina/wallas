

let goToContactDetails = document.getElementById("contactBtn").addEventListener("click", function(event) {
	window.location.href = "#contacto";
});


let toggleHamMenu = document.getElementById("menuBtn").addEventListener("click", function(event) {

	this.classList.toggle("change");
	document.getElementById("menu").classList.toggle("open");

});

let services = document.querySelectorAll(".services div");

let openServiceDetails = function() {

	for (i = 0; i < services.length; i++) {
		
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




// let scroll = window.requestAnimationFrame ||
// function(callback){ window.setTimeout(callback, 1000/60)};

// let elementsToShow = document.querySelectorAll('.services div');

// let loop = function() {

// 	elementsToShow.forEach(element => {

// 		if (isElementInViewport(element)) {
// 			element.classList.add('is-visible');
// 		} else {
// 			element.classList.remove('is-visible');
// 		}
// 	});

// 	scroll(loop);
// }

// const callback = function(entries) {
//   entries.forEach(entry => {
//     entry.target.classList.toggle("is-visible");
//   });
// };

// const observer = new IntersectionObserver(callback);

// const targets = document.querySelectorAll(".services div");
// targets.forEach(function(target) {
//   observer.observe(target);
// });


var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.services div'); 

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();


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