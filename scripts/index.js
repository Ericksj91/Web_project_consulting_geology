//menu desplegable moviles
const buttonMenu = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__link");
const agendaButton = document.querySelector(".nav__button");

buttonMenu.addEventListener("click", () => {
  menu.classList.toggle("nav__links--show");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("nav__links--show");
  });
});

agendaButton.addEventListener("click", () => {
  menu.classList.remove("nav__links--show");
});

//ampliar imagenes, cerrar imgenes
const images = document.querySelectorAll(".gallery__image");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxClose = document.querySelector(".lightbox__close");

function openImage(src) {
  lightboxImage.src = src;
  lightbox.classList.add("lightbox--show");
}

images.forEach((image) => {
  image.addEventListener("click", () => {
    openImage(image.src);
  });
});

function closeImage() {
  lightbox.classList.remove("lightbox--show");
}

lightboxClose.addEventListener("click", closeImage);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeImage();
  }
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeImage();
  }
});
