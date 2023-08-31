const menuButton = document.querySelector('.MenuButton');
        const mobileNavMenu = document.querySelector('.Mobile_nav_menu nav');
    
        menuButton.addEventListener('click', () => {
            mobileNavMenu.classList.toggle('active');
        });
// This example uses window.onload to add the 'show' class after the page loads
window.onload = function() {
    const logoImage = document.querySelector('.Main_Logo_1');
    logoImage.classList.add('show');
};
//for mobile
window.onload = function() {
    const logoImagemB = document.querySelector('.Main_Logo_mb_1');
    logoImagemB.classList.add('show_mb');
};
