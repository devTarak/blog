const menuButton = document.querySelector('.MenuButton');
        const mobileNavMenu = document.querySelector('.Mobile_nav_menu nav');
    
        menuButton.addEventListener('click', () => {
            mobileNavMenu.classList.toggle('active');
        });
window.onload = function() {
    const logoImage = document.querySelector('.Main_Logo_1');
    logoImage.classList.add('show');

    const logoImagemB = document.querySelector('.Main_Logo_mb_1');
    logoImagemB.classList.add('show_mb');
};
