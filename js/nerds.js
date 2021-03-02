/*modal*/

const commentLink = document.querySelector(".button-contacts");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const loginIcon = document.querySelector(".login-icon");

commentLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
    loginIcon.focus();
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modal.classList.contains("modal-show")) {
        evt.preventDefault();
        modal.classList.remove("modal-show");
      }
    }
});

/*slider*/

const control1 = document.querySelector(".control1");
const conteinerSlide1 = document.querySelector(".conteiner-slide1");
const control2 = document.querySelector(".control2");
const conteinerSlide2 = document.querySelector(".conteiner-slide2");
const control3 = document.querySelector(".control3");
const conteinerSlide3 = document.querySelector(".conteiner-slide3");
const buttonControlItem1 = document.querySelector(".button-control-item1");
const buttonControlItem2 = document.querySelector(".button-control-item2");
const buttonControlItem3 = document.querySelector(".button-control-item3");

control1.addEventListener("click", function (evt) {
    conteinerSlide1.classList.add("active-slide");
    conteinerSlide2.classList.remove("active-slide");
    conteinerSlide3.classList.remove("active-slide");
    buttonControlItem1.classList.add("active-control");
    buttonControlItem2.classList.remove("active-control");
    buttonControlItem3.classList.remove("active-control");
});

control2.addEventListener("click", function (evt) {
    conteinerSlide2.classList.add("active-slide");
    conteinerSlide1.classList.remove("active-slide");
    conteinerSlide3.classList.remove("active-slide");
    buttonControlItem1.classList.remove("active-control");
    buttonControlItem2.classList.add("active-control");
    buttonControlItem3.classList.remove("active-control");
});

control3.addEventListener("click", function (evt) {
    conteinerSlide3.classList.add("active-slide");
    conteinerSlide1.classList.remove("active-slide");
    conteinerSlide2.classList.remove("active-slide");
    buttonControlItem1.classList.remove("active-control");
    buttonControlItem2.classList.remove("active-control");
    buttonControlItem3.classList.add("active-control");
});