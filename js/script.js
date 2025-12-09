document.addEventListener("DOMContentLoaded", () => {
  // --- Slideshow ---
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let current = 0;

  function showSlide(i) {
    slides.forEach((s, idx) => s.classList.toggle("active", idx === i));
  }
  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }
  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  if (slides.length) {
    showSlide(current);
    prevBtn?.addEventListener("click", prevSlide);
    nextBtn?.addEventListener("click", nextSlide);
    // Opcional: auto-advance cada 5 segundos
    // setInterval(nextSlide, 5000);
  }

  // --- Acordeón ---
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".accordion-item");
      item.classList.toggle("open");
    });
  });

  // --- Validación de formulario ---
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      let valido = true;

      const nombre = document.getElementById("nombre");
      const email = document.getElementById("email");
      const mensaje = document.getElementById("mensaje");

      const errorNombre = document.getElementById("errorNombre");
      const errorEmail = document.getElementById("errorEmail");
      const errorMensaje = document.getElementById("errorMensaje");

      // Limpiar mensajes previos
      errorNombre.textContent = "";
      errorEmail.textContent = "";
      errorMensaje.textContent = "";

      // Validar nombre
      if (nombre.value.trim().length < 2) {
        errorNombre.textContent = "El nombre debe tener al menos 2 caracteres.";
        valido = false;
      }

      // Validar email
      const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email.value)) {
        errorEmail.textContent = "Ingrese un correo válido.";
        valido = false;
      }

      // Validar mensaje
      if (mensaje.value.trim().length < 10) {
        errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres.";
        valido = false;
      }

      if (!valido) {
        e.preventDefault(); // Evita enviar si hay errores
      } else {
        alert("¡Gracias por tu mensaje!");
      }
    });
  }
});
