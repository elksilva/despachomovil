function iniciarapp(){console.log(1)}document.addEventListener("DOMContentLoaded",(function(){iniciarapp()}));


// Código para el botón del menú hamburguesa
const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
