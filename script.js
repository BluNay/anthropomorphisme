document.addEventListener("DOMContentLoaded", () => {
	// Animation de la mascotte
	const mascot = document.getElementById("mascot-img");
	const mascotMessage = document.getElementById("mascot-message");

	gsap.to(mascot, {
		y: 10,
		duration: 1.5,
		repeat: -1,
		yoyo: true,
		ease: "power1.inOut",
	});

	mascot.addEventListener("mouseenter", () => {
		mascotMessage.textContent = "Cliquez sur moi pour plus d'infos !";
	});

	mascot.addEventListener("mouseleave", () => {
		mascotMessage.textContent = "Bienvenue ! Je suis là pour vous guider.";
	});

	// Animation pour la section des origines
	gsap.from("#origines .pioneer", {
		opacity: 0,
		y: 50,
		stagger: 0.3,
		duration: 1,
		scrollTrigger: {
			trigger: "#origines",
			start: "top 80%",
		},
	});

	gsap.from("#origines .impact", {
		opacity: 0,
		y: 30,
		duration: 1,
		scrollTrigger: {
			trigger: "#origines .impact",
			start: "top 80%",
		},
	});

	// Animation des assistants virtuels
	gsap.from(".assistant", {
		opacity: 0,
		y: 50,
		stagger: 0.3,
		duration: 1,
		scrollTrigger: {
			trigger: "#assistants",
			start: "top 80%",
		},
	});

	// Animation des icônes
	gsap.from(".icon-item", {
		opacity: 0,
		scale: 0.5,
		stagger: 0.2,
		duration: 0.8,
		scrollTrigger: {
			trigger: "#icones",
			start: "top 80%",
		},
	});

	// Animation des messages
	gsap.from(".message", {
		opacity: 0,
		x: (index) => (index % 2 === 0 ? -50 : 50),
		stagger: 0.3,
		duration: 1,
		scrollTrigger: {
			trigger: "#messages",
			start: "top 80%",
		},
	});

	// Exemple d'interaction pour les icônes
	document.querySelectorAll(".icon-item").forEach((item) => {
		item.addEventListener("click", () => {
			gsap.to(item, {
				scale: 1.1,
				duration: 0.3,
				yoyo: true,
				repeat: 1,
			});
		});
	});
});
// Fonction pour agrandir les images
function setupImageZoom() {
	const modal = document.getElementById("imageModal");
	const modalImg = document.getElementById("modalImage");
	const closeBtn = document.getElementsByClassName("close")[0];
	const zoomableImages = document.querySelectorAll(".pioneer-work img");

	zoomableImages.forEach((img) => {
		img.addEventListener("click", function () {
			modal.style.display = "block";
			modalImg.src = this.src;
		});
	});

	closeBtn.onclick = function () {
		modal.style.display = "none";
	};

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};
}

// Appeler la fonction après le chargement du DOM
document.addEventListener("DOMContentLoaded", setupImageZoom);
