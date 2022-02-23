// global variables

const aboutText = document.getElementById('about-text');
const portfolioText = document.getElementById('portfolio-text');
const contactText = document.getElementById('contact-text');

const about = document.getElementsByClassName('about');
const portfolio = document.getElementsByClassName('portfolio');
const contact = document.getElementsByClassName('contact');

// text change functions

function changeAbout() {
    aboutText.style.display = 'block';
    portfolioText.style.display = 'none';
    contactText.style.display = 'none';
}

function changePortfolio() {
    aboutText.style.display = 'none';
    portfolioText.style.display = 'block';
    contactText.style.display = 'none';
}
function changeContact() {
    aboutText.style.display = 'none';
    portfolioText.style.display = 'none';
    contactText.style.display = 'block';
}

// add event listeners

about[0].addEventListener('click', changeAbout);
portfolio[0].addEventListener('click', changePortfolio);
contact[0].addEventListener('click', changeContact);