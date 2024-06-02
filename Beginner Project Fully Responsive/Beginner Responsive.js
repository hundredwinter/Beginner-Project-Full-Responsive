// const menu = document.querySelector('#mobile-menu');
// const menuLinks = document.querySelector('.navbar__menu');
//
// menu.addEventListener('click', function() {
//   menu.classList.toggle('is-active');
//   menuLinks.classList.toggle('active');
// });
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// Function to toggle menu visibility
function toggleMenu() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}

// Event listener for menu icon click
menu.addEventListener('click', toggleMenu);

// WARNING:

// Check screen width on page load
function checkScreenWidth() {
  if (window.innerWidth <= 960) {
    toggleMenu(); // Apply 'is-active' class if screen width is less than or equal to 960px
  }
}

// Call checkScreenWidth function when the page loads
window.addEventListener('load', checkScreenWidth);

// Call checkScreenWidth function when the window is resized
window.addEventListener('resize', checkScreenWidth);

// WARNING:
