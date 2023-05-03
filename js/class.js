// Sélectionner les éléments HTML à modifier pour Menu
const about = document.querySelector("#about");
const work = document.querySelector("#work");
const contact = document.querySelector("#contact");

// Sélectionner les éléments HTML à modifier pour animation
const workAnimation = document.querySelector("#work__Article");
const gridAnimation = document.querySelectorAll(".test");
// Ajouter un événement de défilement à la fenêtre





window.addEventListener("scroll", () => {
  // Vérifier la hauteur de la page au scroll et modifier les classes des éléments en conséquence
  const scrollTop = document.documentElement.scrollTop;
  var aboutSize = 1000
  var workSize = 2000
  var gridAnim = 500

  if (window.screen.width < 1000){
      aboutSize = 1700; 
      workSize = 2700;
    }
  
  if (scrollTop < aboutSize) {
    about.classList.add("active");
    work.classList.remove("active");
    contact.classList.remove("active");

  } else if (scrollTop < workSize) {
    work.classList.add("active");
    about.classList.remove("active");
    contact.classList.remove("active");

  }else{
    contact.classList.add("active");
    about.classList.remove("active");
    work.classList.remove("active");
  }

  if (scrollTop >= gridAnim) {
      workAnimation.classList.add("animation");
      gridAnimation.forEach(element => {
        element.classList.add('animation');
      });
  }
  
})