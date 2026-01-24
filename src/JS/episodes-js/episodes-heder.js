const image = document.querySelector('#header_text_logo_img');
// const originalImage = './img/together/text_logo.png';
// const hoverImage = './img/together/text_logo_gl.png'; // Зображення для hover
import hoverImage from '../../public/text_logo_gl.png';
import originalImage from '../../public/text_logo.png';
// 2x
import hoverImage2x from '../../public/text_logo_gl_2x.png';
import originalImage2x from '../../public/text_logo_2x.png';

image.addEventListener('mouseover', () => {
  if (window.devicePixelRatio > 1) {
    image.src = hoverImage2x;
  } else {
    image.src = hoverImage;
  }
});

image.addEventListener('mouseout', () => {
      if (window.devicePixelRatio > 1) {
    image.src = originalImage2x;
  } else {
    image.src = originalImage;
  }
});
