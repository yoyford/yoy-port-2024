 // Array of language options and their translations
 const languages = [
    { code: 'ph', text: "KAMUSTA, MY NAME IS FLORANTE FABROA JR. WEB DEVELOPER BASED IN POLA, PHILIPPINES" },
    { code: 'en', text: "HELLO, MY NAME IS FLORANTE FABROA JR. WEB DEVELOPER BASED IN POLA, PHILIPPINES" },
    { code: 'es', text: "HOLA, MI NOMBRE ES FLORANTE FABROA JR. DESARROLLADOR WEB CON BASE EN POLA, FILIPINAS" },
    { code: 'fr', text: "BONJOUR, MON NOM EST FLORANTE FABROA JR. DÉVELOPPEUR WEB BASÉ À POLA, PHILIPPINES" },
    { code: 'jp', text: "こんにちは, MON NOM EST FLORANTE FABROA JR. DÉVELOPPEUR WEB BASÉ À POLA, PHILIPPINES" },
];
let currentIndex = 0;
function changeHelloText() {
    const helloText = document.getElementById('helloText');
    helloText.textContent = languages[currentIndex].text.split(',')[0]; 
    currentIndex = (currentIndex + 1) % languages.length;
}
setInterval(changeHelloText, 2000);

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const mobileMenu = document.getElementById('mobileMenu');

    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Function to close mobile menu when window is resized
    window.addEventListener('resize', () => {
        if (window.innerWidth > 541) { // Adjust this value based on your media query breakpoint
            mobileMenu.classList.remove('active');
        }
    });
});