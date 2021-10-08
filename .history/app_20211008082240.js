// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport
// Silce extracts a section of a string without modifying orginal string
// offsetTop - a number, representing the top position of the element, in pixel

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
        const id = e.currentTarget.getAttribute('href').slice(1); // skiped the "#"
        //console.log(id);
        const element = document.getElementById(id);
        //console.log(element);

        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains('fixed-nav');

        let position = element.offsetTop - navHeight;
        
        if (!fixedNav) {
            position =  position - navHeight;
        }

        if (navHeight > 82) {
            position = position + containerHeight;
        }
        //console.log(position); // position of section in pixels
        window.scrollTo({
            left: 0,
            top: position
        });
        linksContainer.style.height = 0;
    });
});