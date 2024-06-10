const initApp = () => {
    const hamburger_button = document.getElementById("hamburger-button");
    const mobile_menu = document.getElementById("mobile-menu");


    const toggleMenu = () => {
        mobile_menu.classList.toggle("hidden");
        mobile_menu.classList.toggle("flex");
        hamburger_button.classList.toggle("toggle-btn")
    }
    mobile_menu.addEventListener('click', toggleMenu);
    hamburger_button.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMcontentloaded', initApp)