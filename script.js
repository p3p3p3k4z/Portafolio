document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".edu-btn"); // Selecciona todos los botones de educación
    const sections = document.querySelectorAll(".edu-cards"); // Selecciona todos los contenedores de certificados
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target"); // Obtiene el ID del contenedor objetivo
        const targetSection = document.getElementById(targetId);
        
        // Alternar visibilidad usando la clase 'visible'
        if (!targetSection.classList.contains("visible")) {
          // Oculta todos los contenedores
          sections.forEach((section) => section.classList.remove("visible"));
          // Muestra el contenedor seleccionado
          targetSection.classList.add("visible");
        } else {
          // Si ya estaba visible, la oculta
          targetSection.classList.remove("visible");
        }
      });
    });
  });
  