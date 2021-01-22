const navLogo = document.querySelector('.nav__logo');
const nav = document.querySelector('nav');
const logoText = document.querySelector('.nav__text');
const logoTextLg = document.querySelector('li.nav__text');

window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > 25){
        // nav.style.transition = 'background-color 500ms ease-in-out';
        nav.style.backgroundColor = '#0C0B0D';
        // nav.style.backgroundColor = '#fff';
        nav.style.position = 'fixed'

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
        logoTextLg.style.color ='#eee9e6';

        nav.style.position = 'sticky'
    }
});

const tipsAnswers = document.querySelectorAll('.tips__answers');
const tipsBtns = document.querySelector('.tips__btns');

tipsBtns.addEventListener('click',(e)=>{
    
    if (!isNaN(e.target.innerHTML) ){
        for(i = 0; i < tipsAnswers[0].childElementCount; i++) {
            tipsAnswers[0].children[i].classList.remove('show');
            tipsAnswers[0].children[i].classList.add('hide');
        }   
        tipsAnswers[0].children[e.target.innerHTML - 1].classList.add('show');
        // tipsAnswers[0].children[e.target.innerHTML - 1].children[0].style.display = 'block';
        // tipsAnswers[0].children[e.target.innerHTML - 1].children[1].style.color = 'black';
        // tipsAnswers[0].children[e.target.innerHTML - 1].children[1].style.lineHeight = '26px';
    }
   
});


const navIcon = document.querySelector('.nav__icon');   
const mobileMenu = document.querySelector('.mobile__menu');
let menuOpen = false;
// navIcon.addEventListener('click',()=>{
//     if (!menuOpen){ 
//         mobileMenu.style.transform = 'translateY(25%)';
//         menuOpen = true;
//     } else {
//         mobileMenu.style.transform = 'translateY(-164%)';
//         menuOpen = false;
//     }
// });




// tipsAnswers[0].children[1].classList.value.includes('show')
const gallery = document.querySelector('#gallery');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal__img');
const galleryImgs = document.querySelector('.gallery__container');
const zoomBtn = document.querySelector('.zoom-btn');

const galleryStart = document.querySelector('#gallery-start');

galleryImgs.addEventListener('click', (e)=>{
    let imgSrc;
    if (e.target.classList[0] != 'zoom-btn') {
        imgSrc = `<img src="${e.target.previousElementSibling.getAttribute('src')}" alt="">`;
    } else {
        imgSrc = `<img src="${e.target.parentElement.parentElement.children[0].getAttribute('src')}" alt="">`
    }
    modal.classList.toggle('off');
    modalImg.innerHTML = imgSrc;
    // window.location.href = '#gallery-end';
    window.scrollTo(0, window.pageYOffset + 600);
});

modalImg.addEventListener('mouseleave', ()=>{
    modal.classList.toggle('off');
    // window.location.href = '#gallery-start';
    window.scrollTo(0, window.pageYOffset - 500);

});
let on = true;
const video = document.getElementById('video');
setInterval(()=>{
    video.play();
}, 15000);