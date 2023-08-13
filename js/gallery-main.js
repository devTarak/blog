const images_main = document.querySelectorAll('.image_main img');
const lightbox_main = document.querySelector('.lightbox_main');
const lightboxImg_main = lightbox_main.querySelector('img');
const closeButton_main = document.querySelector('.close-button_main');

images_main.forEach(image_main => {
  image_main.addEventListener('click', () => {
    lightboxImg_main.src = image_main.src;
    lightbox_main.style.display = 'flex';
  });
});

closeButton_main.addEventListener('click', () => {
  lightbox_main.style.display = 'none';
});
