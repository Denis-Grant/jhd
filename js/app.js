const navLogo = document.querySelector('.nav__logo');
const nav = document.querySelector('nav');
const logoText = document.querySelector('.logo-text');

window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > 25){
        // nav.style.transition = 'background-color 500ms ease-in-out';
        nav.style.backgroundColor = '#eee9e6';
        nav.style.color = 'black';
        navLogo.src = 'img/logo-sm-black.jpg';
        logoText.style.color ='#1a1a1a';

    }
    if (window.pageYOffset < 26) {
        // nav.style.transition = 'background-color 500ms ease-in-out';
        nav.style.backgroundColor = 'rgba(0,0,0,0)';
        nav.style.color = '';
        navLogo.src = 'img/logo-sm-white.jpg';
        logoText.style.color ='#fff';
    }
});