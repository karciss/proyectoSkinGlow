// Función para iniciar el cambio automático de imágenes para todas las cards
function initAutoImageChange() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        const images = JSON.parse(card.getAttribute("data-images"));
        const imgElement = card.querySelector(".card-img-top");
        let currentIndex = 0;

        // Inicia el cambio automático
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            imgElement.src = images[currentIndex];
        }, 3000); // Cambiar cada 3 segundos
    });
}

// Mostrar imagen en el lightbox
function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = img.src; // Mostrar la imagen seleccionada
    lightbox.classList.remove("d-none");
    lightbox.classList.add("d-flex");
}

// Cerrar el lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("d-flex");
    lightbox.classList.add("d-none");
}

// Llama a la función para iniciar el cambio automático
document.addEventListener("DOMContentLoaded", initAutoImageChange);
