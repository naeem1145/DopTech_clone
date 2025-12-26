document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

    // Function to open the menu
    const openMenu = () => {
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    };

    // Function to close the menu
    const closeMenu = () => {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Open menu when hamburger is clicked
    menuToggle.addEventListener('click', openMenu);

    // Close menu when X button is clicked
    closeBtn.addEventListener('click', closeMenu);

    // Optional: Close menu when a link is clicked (assuming navigation)
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});



const contactLinks = document.querySelectorAll('.contact-link');
const contactSection = document.querySelector('.contact-section');

contactLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // show contact section
    contactSection.style.display = 'block';

    // smooth scroll to contact
    contactSection.scrollIntoView({ behavior: 'smooth' });

    // mobile menu open থাকলে close করো
    if (typeof closeMenu === 'function') {
      closeMenu();
    }
  });
});