// Function to set the theme choice in localStorage
function setThemeChoice(theme) {
  localStorage.setItem('userTheme', theme);
}

// Function to get the theme choice from localStorage
function getThemeChoice() {
  return localStorage.getItem('userTheme');
}

// Function to apply the user's theme choice
function applyTheme() {
  const themeChoice = getThemeChoice();

  // Check if the user has a theme choice stored
  if (themeChoice) {
    document.body.classList.toggle('light-Theme', themeChoice === 'light'); // Adjust the class name as needed
  }
}

// Event listener for theme switch (desktop)
var myThemeIcon = document.getElementById('myThemeIcon');
myThemeIcon.addEventListener('click', function () {
  document.body.classList.toggle('light-Theme');
   if(document.body.classList.contains('light-Theme')){
    myThemeIcon.src ="https://raw.githubusercontent.com/devTarak/blog/main/img/moon.png";
  }else{
    myThemeIcon.src = "https://raw.githubusercontent.com/devTarak/blog/main/img/sun.png";
  }
  const isLightTheme = document.body.classList.contains('light-Theme');

  // Store the user's theme choice
  setThemeChoice(isLightTheme ? 'light' : 'dark');
});

// Event listener for theme switch (mobile)
var myThemeIcon_mob = document.getElementById('myThemeIcon_mob');
myThemeIcon_mob.addEventListener('click', function () {
  document.body.classList.toggle('light-Theme');
  if(document.body.classList.contains('light-Theme')){
    myThemeIcon_mob.src ="https://raw.githubusercontent.com/devTarak/blog/main/img/moon.png";
  }else{
    myThemeIcon_mob.src = "https://raw.githubusercontent.com/devTarak/blog/main/img/sun.png";
  }
  const isLightTheme = document.body.classList.contains('light-Theme');

  // Store the user's theme choice
  setThemeChoice(isLightTheme ? 'light' : 'dark');
});

// Apply the user's theme choice on page load
window.onload = function () {
  applyTheme();
};

// Menu Button Toggle
const menuButton = document.querySelector('.MenuButton');
const mobileNavMenu = document.querySelector('.Mobile_nav_menu nav');

menuButton.addEventListener('click', () => {
  mobileNavMenu.classList.toggle('active');
});

// Logo Animation
const logoImage = document.querySelector('.Main_Logo_1');
logoImage.classList.add('show');

const logoImagemB = document.querySelector('.Main_Logo_mb_1');
logoImagemB.classList.add('show_mb');
