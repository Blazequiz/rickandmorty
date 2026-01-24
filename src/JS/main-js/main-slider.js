const slider = document.querySelector('.slider-img');
const sliderList = slider.querySelector('.slider-img-list');

let isDragging = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  sliderList.classList.add('dragging');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDragging = false;
  sliderList.classList.remove('dragging');
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
  sliderList.classList.remove('dragging');
});

slider.addEventListener('mousemove', (e) => {
  if(!isDragging) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.3;
  slider.scrollLeft = scrollLeft - walk;
});