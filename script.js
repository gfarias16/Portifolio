const menuButton = document.getElementById("menu-button");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuButton.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
    });
});
