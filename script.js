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
document.addEventListener('DOMContentLoaded', handleResize);
