const menu = document.querySelector("nav");
const header = document.querySelector("#mi-encabezado");

// Solo ejecutamos si ambos existen en la página actual
if (menu && header) {
    window.addEventListener("scroll", () => {
        const headerHeight = header.offsetHeight;
        
        if (window.scrollY > headerHeight) {
            // Azul oscuro
            menu.style.backgroundColor = "rgb(5, 43, 150)"; 
        } else {
            // Transparente
            menu.style.backgroundColor = "rgba(0, 0, 0, 0)"; 
        }
    });
}