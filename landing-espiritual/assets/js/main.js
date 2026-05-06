// Espera a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {

    const cartas = document.querySelectorAll(".flip-card");

    cartas.forEach(carta => {
        carta.addEventListener("click", () => {

            // OPCIONAL: cerrar otras cartas (modo tarot real)
            cartas.forEach(c => {
                if (c !== carta) {
                    c.classList.remove("flip");
                }
            });

            // girar la carta clickeada
            carta.classList.toggle("flip");
        });
    });

});

const tarjetas = document.querySelectorAll(".tarjeta-imagen");

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("mousemove", (e) => {
        const rect = tarjeta.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 10;
        const rotateY = (x - centerX) / 10;

        tarjeta.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.05)
        `;

        // 🔥 brillo sigue el mouse
        tarjeta.style.setProperty("--x", `${x}px`);
        tarjeta.style.setProperty("--y", `${y}px`);
    });

    tarjeta.addEventListener("mouseleave", () => {
        tarjeta.style.transform = `
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;
    });

});