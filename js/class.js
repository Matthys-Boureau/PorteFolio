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

    if (window.screen.width < 620){
      aboutSize = 2400; 
      workSize = 3200;
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

let container = document.querySelectorAll('.container');
let point = document.querySelectorAll('.point');

let count = 0;
let intervalId = setInterval(() => {
    for(let i = 0; i < container.length; i++) {
        container[i].classList.remove('visible');
        point[i].classList.remove('visible');
    }

    if(count < container.length - 1) {
        count++;
    } else {
        count = 0;
    }

    container[count].classList.add('visible');
    point[count].classList.add('visible');
}, 4000);

for(let i = 0; i < container.length; i++) {
  container[i].addEventListener('mouseenter', () => {
      clearInterval(intervalId);
  });

  container[i].addEventListener('mouseleave', () => {
      intervalId = setInterval(() => {
          for(let j = 0; j < container.length; j++) {
              container[j].classList.remove('visible');
              point[j].classList.remove('visible');
          }

          if(count < container.length - 1) {
              count++;
          } else {
              count = 0;
          }

          container[count].classList.add('visible');
          point[count].classList.add('visible');
      }, 4000);
  });
}