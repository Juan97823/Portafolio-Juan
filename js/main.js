/* =========================
   MENÚ MÓVIL
========================= */

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isExpanded));

    navMenu.classList.toggle("active");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu) {
      navMenu.classList.remove("active");
    }

    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

/* =========================
   ANIMACIÓN AL HACER SCROLL
========================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    },
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("active");
  });
}

/* =========================
   CURSOR PERSONALIZADO
========================= */

const cursor = document.querySelector(".cursor");

const follower = document.querySelector(".cursor-follower");

const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;

if (cursor && follower && supportsFinePointer) {
  let mouseX = 0;
  let mouseY = 0;

  let followerX = 0;
  let followerY = 0;

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  function animateCursor() {
    followerX += (mouseX - followerX) * 0.14;

    followerY += (mouseY - followerY) * 0.14;

    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

    follower.style.transform = `translate(${followerX}px, ${followerY}px)`;

    requestAnimationFrame(animateCursor);
  }

  animateCursor();
}

/* =========================
   FORMULARIO DE CONTACTO
========================= */

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");

    const emailInput = document.getElementById("email");

    const messageInput = document.getElementById("message");

    const name = nameInput.value.trim();

    const email = emailInput.value.trim();

    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      alert("Por favor completa todos los campos.");

      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Ingresa un correo válido.");

      return;
    }

    const subject = encodeURIComponent(
      "Contacto desde el portafolio - " + name,
    );

    const body = encodeURIComponent(
      "Hola Juan,\n\n" +
        "Mi nombre es: " +
        name +
        "\n\n" +
        "Correo de contacto: " +
        email +
        "\n\n" +
        "Mensaje:\n" +
        message,
    );

    window.location.href =
      "mailto:TU_CORREO@gmail.com" + "?subject=" + subject + "&body=" + body;

    contactForm.reset();
  });
}
