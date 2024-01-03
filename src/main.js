const navbarIcon = document.querySelector('.navbar-menu-btn');
const navbarMenu = document.querySelector('.navbar-menu');

navbarIcon.addEventListener('click', () => {
    const isExpanded = navbarIcon.getAttribute('aria-expanded') === "true";
    navbarIcon.setAttribute('aria-expanded', !isExpanded);
    navbarMenu.classList.toggle('navbar-menu--active');
});