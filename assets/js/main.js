/*Items HTML*/

/*Items relacionados con la nav bar*/
var header__toggle = document.querySelector(".header__toggle");
var header__toggle_icon = header__toggle.children[0];
var header__ul = document.querySelector(".header__ul");

/*Items relacionados con el slider*/
var hero__img = document.querySelectorAll(".hero__img");
var hero__index = document.querySelector("#hero__index");
var hero__controls = document.querySelectorAll(".hero__controls");
var hero__dots_imgs = document.querySelectorAll(".hero__dot_img");

/*Listeners*/
header__toggle.addEventListener("click", menu_controller);
hero__controls.forEach((control) => {
  control.addEventListener("click", function (e) {
    sliderController(e);
  });
});

/*Funciones*/
function menu_controller() {
  if (header__ul.style.visibility === "visible") {
    header__ul.style.visibility = "hidden";
    header__toggle_icon.src = "../assets/imgs/icons/hamburger.svg";
  } else {
    header__ul.style.visibility = "visible";
    header__toggle_icon.src = "../assets/imgs/icons/x.svg";
  }
}

var index = 0;
var interval = setInterval(sliderController, 5000);
function sliderController(e) {
  /* 
    - Se comprueba de donde viene evento que ha llamado a la función
    - Se suma/resta al index en función del origen
    - Se comprueba que no se salga del rango
  */
  if (e === undefined || e.target.classList.contains("hero__controls--forward")) {
    index++;
  } else {
    index--;
  }
  if (index > hero__img.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = 2;
  }

  //Se resetea el intervalo para evitar que la imagen cambie muy rápido
  clearInterval(interval);
  interval = setInterval(sliderController, 5000);

  //Se actualiza el indicador de los controles y los puntitos
  hero__index.innerHTML = index + 1;
  hero__dots_imgs.forEach((dot) => {
    dot.src = "./assets/imgs/icons/stroke_dot.svg";
  });
  hero__dots_imgs[index].src = "./assets/imgs/icons/dot.svg"

  //Se esconden todas las imágenes menos la del index actual
  hero__img.forEach((img) => {
    img.classList.add("hero__img--hidden");
  });
  hero__img[index].classList.remove("hero__img--hidden");
}
