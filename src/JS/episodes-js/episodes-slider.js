const sliderLine = document.querySelector('.slider_line');
const images = document.querySelectorAll('.slider_img');
const blockWidth = document.querySelector('.slider_block');

let count = 0;
let width;

function init() {
  blockWidth.offsetWidth;
  sliderLine.style.width = `${blockWidth * images.length}px`;
  images.forEach(item => {
    item.style.blockWidth = blockWidth + 'px';
    item.style.height = 'auto';
  });
  console.log(width);
}

init();
window.addEventListener('resize', init);

function rollSlider() {
  sliderLine.style.transform = `translate(-${count * width + 'px'}`;
}

  let seconds = 0;

function sliderNext() {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
  seconds += 1;
  console.log(seconds);
  
}

// if (nextButton != null) nextButton.addEventListener('click', sliderNext)
// function sliderPrev(){
// count--;
// if (count < 0){
// count = images.length - 1;
// }
// rollSlider();
// }
// if (prevButton != null) prevButton.addEventListener('click', sliderPrev)

// const timer = setInterval(() => {
// sliderNext()
// }, 3000)
//   console.log(seconds);