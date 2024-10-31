document.addEventListener('DOMContentLoaded', function(){ iniciarapp(); });



function iniciarapp(){
    console.log(1);    
}

const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
