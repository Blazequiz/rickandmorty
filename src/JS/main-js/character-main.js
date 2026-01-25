const titles = document.querySelectorAll('.character-title');
const sourceMobile = document.getElementById('source-mobile');
const sourceTablet = document.getElementById('source-tablet');
const sourceDesktop = document.getElementById('source-desktop');
const img = document.querySelector('.main-picture-img');

titles.forEach(title => {
  title.addEventListener('click', () => {

    titles.forEach(titles => titles.classList.remove('active'));
    title.classList.add('active');

    const mob = title.dataset.mob;
    const tab = title.dataset.tab;
    const desk = title.dataset.desk;

    sourceMobile.srcset = mob;
    sourceTablet.srcset = tab;
    sourceDesktop.srcset = desk;

    img.src = desk.split(',')[0].split(' ')[0];
  });
});

