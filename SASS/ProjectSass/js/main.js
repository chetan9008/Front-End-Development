const Menu = document.querySelector('.menu-btn');
const Menu_icon = document.querySelector('.menu-btn-icon');

const Nav = document.querySelector('.nav');
const Menu_nav = document.querySelector('.menu-nav');

let MenuStatus = false;

Menu_icon.addEventListener('click', toogleFunction);

function toogleFunction() {
    if (!MenuStatus) {
        Menu_icon.classList.add('open');
        Nav.classList.add('open');
        Menu_nav.classList.add('open');

        MenuStatus = true;
    }
    else {
        Menu_icon.classList.remove('open');
        Nav.classList.remove('open');
        Menu_nav.classList.remove('open');

        MenuStatus = false;
    }
}
