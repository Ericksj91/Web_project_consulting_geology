//menu desplegable moviles
const buttonMenu = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__link");
const agendaButton = document.querySelector(".nav__button");

buttonMenu.addEventListener("click", () => {
  menu.classList.toggle("nav__links--show");
  const expanded = menu.classList.contains("nav__links--show");
  buttonMenu.setAttribute("aria-expanded", expanded ? "true" : "false");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("nav__links--show");
    buttonMenu.setAttribute("aria-expanded", "false");
  });
});

agendaButton.addEventListener("click", () => {
  menu.classList.remove("nav__links--show");
  buttonMenu.setAttribute("aria-expanded", "false");
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
  lightboxImage.src = "";
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

//activacion de botones
//funcion para abrir el enlace de WhatsApp en una nueva pestaña
function openWhatsApp(message) {
  const url = `https://wa.me/593987251466?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
//boton navbar agenda tu consulta

agendaButton.addEventListener("click", () => {
  openWhatsApp("Hola, me gustaría agendar una consulta.");
});

//botones de los cursos
const cursosLinks = document.querySelectorAll("[data-action='WhatsApp']");

cursosLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const courseName = link.dataset.course;
    openWhatsApp(`Hola, estoy interesado en el curso de ${courseName}`);
  });
});

//botones de contacto
const actionButtons = document.querySelectorAll(".contactos__action-button");

actionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    switch (action) {
      case "email":
        window.location.href = "mailto:geoce.capacitacion@gmail.com";
        break;
      case "whatsapp":
        openWhatsApp("Hola, me gustaría agendar una consulta.");
        break;
      case "phone":
        window.location.href = "tel:+593987251466";
        break;
      case "location":
        window.open(
          "https://www.google.com/maps/search/?api=1&query=La+Carolina,+Quito,+Ecuador",
          "_blank",
        );
        break;
    }
  });
});
//reproduccion de videos de youtube
const videosYoutube = document.querySelectorAll(".youtube");

videosYoutube.forEach((video) => {
  video.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    const videoId = video.dataset.video;
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.title = "YouTube video player";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    video.replaceChildren(iframe);
  });
});
