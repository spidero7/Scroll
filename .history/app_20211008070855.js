// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport

// set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// close links
const navToggleButton = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggleButton.addEventListener('click', function() {
    // linksContainer.classList.toggle('show-links');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

// fixed navbar
window.addEventListener('scroll', function () {
    //console.log(window.pageYOffset); // show how pixels we scroll
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});

// smooth scroll
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
    })
});