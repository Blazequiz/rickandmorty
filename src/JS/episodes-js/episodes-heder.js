const image = document.querySelector("#header_text_logo_img")
const originalImage = './img/together/text_logo.png';
// const hoverImage = './img/together/text_logo_gl.png'; // Зображення для hover
import hoverImage from '../../public/text_logo_gl.png'

image.addEventListener('mouseover', () => {
    image.src = hoverImage;
});

image.addEventListener('mouseout', () => {
    image.src = originalImage;
});