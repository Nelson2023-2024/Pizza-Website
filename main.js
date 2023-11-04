const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")
const navLink = document.querySelectorAll("nav__link")

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.toggle("show-menu")
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove("show-menu")
    })
}

/*REMOVE MENU MOBILE */
navLink.forEach(link => link.addEventListener('click',() =>{
    navMenu.classList.remove("show-menu")

}))


/*SHOW SCROLL UP*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll'):scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* DARK AND LIGHT MODE*/
const themebutton = document.getElementById('theme-button')

if(localStorage.getItem('mode') == 'dark'){
    darkmode()
   }
   else{
    lightMode()
   }
themebutton.addEventListener('click', (e) =>{
   if(localStorage.getItem('mode') == 'light'){
    darkmode()
   }
   else{
    lightMode()
   }
})

function darkmode(){
    document.body.classList.add('dark-theme')
    themebutton.classList.replace('fa-moon','fa-sun')
    localStorage.setItem('mode','dark')
}
function lightMode(){
    document.body.classList.remove('dark-theme')
    themebutton.classList.replace('fa-sun','fa-moon')
    localStorage.setItem('mode','light')
}

/*SCROLL RVEAL ANIMATIONS */
document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400
    });

    sr.reveal('.home__img');
    sr.reveal('.home__data', { origin: 'bottom' });


    sr.reveal('.about__data', { origin: 'left' });
    sr.reveal('.about__img', { origin: 'right' });

    sr.reveal('.popular__card', { interval: 300 });

    sr.reveal('.recently__data', { origin: 'left' });
    sr.reveal('.recently__img', { origin: 'right' });

    sr.reveal('.newsletter', { origin: 'left' });

    sr.reveal('.footer');
});