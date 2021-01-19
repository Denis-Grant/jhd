const navLogo = document.querySelector('.nav__logo');
const nav = document.querySelector('nav');
const logoText = document.querySelector('.nav__text');
const logoTextLg = document.querySelector('li.nav__text');

window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > 25){
        // nav.style.transition = 'background-color 500ms ease-in-out';
        nav.style.backgroundColor = '#0C0B0D';
        // nav.style.backgroundColor = '#fff';

        nav.style.color = '#eee9e6';
        // navLogo.src = 'img/logo-sm-black.jpg';
        logoText.style.color ='#d2a56d';
        logoTextLg.style.color ='#d2a56d';

    }
    if (window.pageYOffset < 26) {
        // nav.style.transition = 'background-color 500ms ease-in-out';
        nav.style.backgroundColor = 'rgba(0,0,0,0)';
        nav.style.color = '';
        // navLogo.src = 'img/logo-sm-white.jpg';
        logoText.style.color ='#ffffffad';
    }
});