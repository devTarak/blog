const images = document.querySelectorAll('.image_main img');
const lightbox = document.querySelector('.lightbox_main');
const lightboxImg = lightbox.querySelector('img');
const closeButton = document.querySelector('.close-button_main');

images.forEach(image => {
  image.addEventListener('click', () => {
    lightboxImg.src = image.src;
    lightbox.style.display = 'flex';
  });
});

closeButton.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
