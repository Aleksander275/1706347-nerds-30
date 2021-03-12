/*modal*/

const commentLink = document.querySelector(".button-contacts");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const loginIcon = document.querySelector(".login-icon");
const nameIcon = document.querySelector(".name-icon");
const commentIcon = document.querySelector(".comment-icon");
const loginForm = document.querySelector(".login-form");

commentLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
    loginIcon.focus();
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
    loginIcon.classList.remove("modal-error");
    nameIcon.classList.remove("modal-error");
    commentIcon.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modal.classList.contains("modal-show")) {
        evt.preventDefault();
        modal.classList.remove("modal-show");
        loginIcon.classList.remove("modal-error");
        nameIcon.classList.remove("modal-error");
        commentIcon.classList.remove("modal-error");
      }
    }
});

loginForm.addEventListener("submit", function (evt) {
    if (!loginIcon.value || !nameIcon.value || !commentIcon.value) {
      evt.preventDefault();
      loginIcon.classList.add("modal-error");
      nameIcon.classList.add("modal-error");
      commentIcon.classList.add("modal-error");
    }
});
/*slider*/

const control1 = document.querySelector(".control-one");
const conteinerSlide1 = document.querySelector(".conteiner-slide-one");
const control2 = document.querySelector(".control-two");
const conteinerSlide2 = document.querySelector(".conteiner-slide-two");
const control3 = document.querySelector(".control-three");
const conteinerSlide3 = document.querySelector(".conteiner-slide-three");
const buttonControlItem1 = document.querySelector(".button-control-item-one");
const buttonControlItem2 = document.querySelector(".button-control-item-two");
const buttonControlItem3 = document.querySelector(".button-control-item-three");

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