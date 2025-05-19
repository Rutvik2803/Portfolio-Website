<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 912a00c783e2f7bcdba067c4da01d3000dc1cdf5
// Toggle mobile menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

// Function to handle responsive services container
function handleResize() {
    const servicesContainer = document.querySelector('.services-container');

    if (window.innerWidth <= 768) {
        servicesContainer.style.flexDirection = 'column';
        servicesContainer.style.gap = '2rem';
    } else {
        servicesContainer.style.flexDirection = 'row';
        servicesContainer.style.gap = '5rem';
    }
}

// Add event listener for window resize and DOM content loaded
<<<<<<< HEAD
window.addEventListener('resize', handleResize);
=======

// Toggle mobile menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

// Function to handle responsive services container
function handleResize() {
    const servicesContainer = document.querySelector('.services-container');

    if (window.innerWidth <= 768) {
        servicesContainer.style.flexDirection = 'column';
        servicesContainer.style.gap = '2rem';
    } else {
        servicesContainer.style.flexDirection = 'row';
        servicesContainer.style.gap = '5rem';
    }
}

// Add event listener for window resize and DOM content loaded
window.addEventListener('resize', handleResize);
>>>>>>> fb8d42fb8188d94d120538dbd06b40e2adc9bdd4
document.addEventListener('DOMContentLoaded', handleResize);
=======
window.addEventListener('resize', handleResize);
>>>>>>> 912a00c783e2f7bcdba067c4da01d3000dc1cdf5
