const desktopNav = document.querySelector(".desktop-nav");
const overlay = document.querySelector(".overlay");

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");
const backgroundSections = document.querySelectorAll(".hero-section"); // Select all hero sections
const backgroundSections2 = document.querySelectorAll(".link-logo"); // Select all hero sections
const linkLogoContainer = document.querySelector(".link-logo-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active"); // Toggle the active class
    backgroundSections.forEach(section => {
        section.classList.toggle("blurred"); // Toggle the blurred class on each section
    });
    backgroundSections2.forEach(section => {
        section.classList.toggle("blurred"); // Toggle the blurred class on each section
    });
    backgroundSections3.forEach(section => {
        section.classList.toggle("blurred"); // Toggle the blurred class on each section
    });
});

//Close function
function closeBanner() {
    const banner = document.querySelector('.banner');
    banner.style.transition = 'opacity 0.3s ease'; // Smoothly fade out the banner
    banner.style.opacity = '0'; // Fade out the banner
    
    const navContainer = document.querySelector('.nav-container');
    navContainer.style.transition = 'margin-top 0.3s ease'; // Smoothly transition margin-top
    navContainer.style.marginTop = '0'; // Remove margin top
    
    // After the banner fades out, remove it from the DOM and reset styles
    banner.addEventListener('transitionend', function() {
        banner.style.display = 'none';
        banner.style.opacity = '1'; // Reset opacity for next use if needed
    }, { once: true }); // Ensure this listener only fires once
}

