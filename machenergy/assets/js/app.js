const mobileNav = document.querySelector('#hamburgerMenu')

const mobileMenu = document.querySelector('#mobile')

// toggle visibility of mobile menu
mobileNav.addEventListener('click', () => mobileMenu.className === "mobile-menu" ? mobileMenu.className += " enabled" : mobileMenu.className = "mobile-menu")

// in case user changes dimension of broswer, make mobile menu invisible
window.addEventListener('resize', () => mobileMenu.className = "mobile-menu") 