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
        myThemeIcon.src = "https://raw.githubusercontent.com/devTarak/blog/main/img/moon.png";
    }else{
        myThemeIcon.src = "https://raw.githubusercontent.com/devTarak/blog/main/img/sun.png";
    }
}
var myThemeIcon_mob = document.getElementById("myThemeIcon_mob");
myThemeIcon_mob.onclick = function(){
    document.body.classList.toggle("light-Theme");
    if(document.body.classList.contains("light-Theme")){
        myThemeIcon_mob.src = "https://raw.githubusercontent.com/devTarak/blog/main/img/moon.png";
    }else{
        myThemeIcon_mob.src = "https://raw.githubusercontent.com/devTarak/blog/main/img/sun.png";
    }
}