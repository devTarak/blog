const images = document.querySelectorAll('.image img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeButton = document.querySelector('.close-button');

images.forEach(image => {
  image.addEventListener('click', () => {
    lightboxImg.src = image.src;
    lightbox.style.display = 'flex';
  });
});

closeButton.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
