// Sélectionner les éléments HTML à modifier pour Menu
const about = document.querySelector("#about");
const work = document.querySelector("#work");
const contact = document.querySelector("#contact");

// Sélectionner les éléments HTML à modifier pour animation
const workAnimation = document.querySelector("#work__Article");

// Ajouter un événement de défilement à la fenêtre
window.addEventListener("scroll", () => {
  // Vérifier la hauteur de la page au scroll et modifier les classes des éléments en conséquence
  const scrollTop = document.documentElement.scrollTop;
  if (scrollTop <= 1000) {
    about.classList.add("active");
    work.classList.remove("active");
    contact.classList.remove("active");
  } else if (scrollTop <= 2000) {
    work.classList.add("active");
    workAnimation.classList.add("animation");
    about.classList.remove("active");
    contact.classList.remove("active");
  } else {
    contact.classList.add("active");
    about.classList.remove("active");
    work.classList.remove("active");
    
  }
});
