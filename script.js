// Select the about image
const aboutPhoto = document.querySelector('.about-photo');

// Only run if the image exists (prevents errors on other pages)
if (aboutPhoto) {
  // Mouse enters → turn color
  aboutPhoto.addEventListener('mouseenter', () => {
    aboutPhoto.classList.add('is-color');
  });

  // Mouse leaves → back to black & white
  aboutPhoto.addEventListener('mouseleave', () => {
    aboutPhoto.classList.remove('is-color');
  });
}
<script src="script.js"></script>