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
var myThemeIcon = document.getElementById("myThemeIcon");
myThemeIcon.onclick = function(){
    document.body.classList.toggle("light-Theme");
    if(document.body.classList.contains("light-Theme")){
        myThemeIcon.src = "img/moon.png";
    }else{
        myThemeIcon.src = "img/sun.png";
    }
}