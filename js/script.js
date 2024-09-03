//animacion banner
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerContainer = document.querySelector('.hamburger-container');
    const sidebarMenu = document.querySelector('.sidebar-menu');
    const overlay = document.querySelector('.overlay');

    if (hamburgerContainer && sidebarMenu && overlay) {
        hamburgerContainer.addEventListener('click', function () {
            sidebarMenu.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', function () {
            sidebarMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    } else {
        console.error('Elementos no encontrados');
    }
});
//animacion de fondos 
document.addEventListener('DOMContentLoaded', function () {
    const textBoxes = document.querySelectorAll('.text-box');
    let activeBox = document.querySelector('.text-box.active');
    let activeImage = document.querySelector('.background-image.active');

    textBoxes.forEach(box => {
        box.addEventListener('click', function () {
            // Si la caja que se clickeó ya está activa, no hacer nada
            if (box === activeBox) return;

            // Remover la clase 'active' de la caja actualmente activa
            activeBox.classList.remove('active');

            // Remover la clase 'active' de la imagen actualmente activa
            activeImage.classList.remove('active');

            // Agregar la clase 'active' a la caja clickeada
            box.classList.add('active');

            // Obtener la nueva imagen asociada a la caja clickeada
            const newImageId = box.getAttribute('data-image');
            const newImage = document.getElementById(newImageId);

            // Agregar la clase 'active' a la nueva imagen
            newImage.classList.add('active');

            // Actualizar las variables activas
            activeBox = box;
            activeImage = newImage;
        });
    });
});