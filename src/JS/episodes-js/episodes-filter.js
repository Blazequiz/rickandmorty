const BASE_URL = 'https://rickandmortyapi.com/api/episode';
const name_input = document.querySelector('#name_input');
const select = document.querySelector('#select');
const visualList = document.querySelector('#episops_list');
const loadMoreBtn = document.querySelector('#load_more_episodes');
import { openModal } from "./modal.js";
// import ops1x from '../../img/together/oo';
// import ops2x from '../img/scientist-optimization/blodgett-optimized.jpg'; 
// <div class="ops_position-div">
      // <img src="./img/together/oops_mobile_1x.png" alt="зелений портал з якого наполовину вилізли Рік і Морті" srcset="./img/together/oops_mobile_1x.png 284w, ./img/together/oops_mobile_2x.png 568w, ./img/together/oops_tablet_and_desktop_1x.png 388w, ./img/together/oops_tablet_and_desktop_2x.png 776w, 100vw" sizes="(min-width: 768px) 388px, (max-width: 768px) 284px, 100vw" class="ops_img">
      // <p class="ops_paragraf">Oops! Try looking for something else...</p>
      // </div>

let episod = '';
let episodsCounter = 0;
const episodesMap = new Map();
let name = '';
let loadMoreLimit = 0;
let loadMoreMultipliyer = 1;
let page = 1;
const somethingWentWrong = `<div class="ops_position-div">
      <img src="./img/together/oops_mobile_1x.png" alt="зелений портал з якого наполовину вилізли Рік і Морті" srcset="./img/together/oops_mobile_1x.png 284w, ./img/together/oops_mobile_2x.png 568w, ./img/together/oops_tablet_and_desktop_1x.png 388w, ./img/together/oops_tablet_and_desktop_2x.png 776w, 100vw" sizes="(min-width: 768px) 388px, (max-width: 768px) 284px, 100vw" class="ops_img">
      <p class="ops_paragraf">Oops! Try looking for something else...</p>
      </div>`

const getLimitByScreen = () => {
  const width = window.innerWidth;

  if (width < 1200) return 10;
  return 20;
};

let limit = getLimitByScreen();

// fetch

const getAllEpisodes = () => {
  loadMoreBtn.style.display = "block";
  if(episod !== ''){
    loadMoreBtn.style.display = "none";
  }
  return fetch(`${BASE_URL}?episode=${episod}&name=${name}&page=${page}`).then(
    responce => {
      return responce.json();
    }
  );
};

const getEpisodes = event => {
  getAllEpisodes().then(episodes => {
    // console.log(episodes)
    // console.log(episodes.results.slice(0, limit))
    try {
      renderEpisodes(episodes.results.slice(0, limit));
    } catch {
      console.log('error');
      visualList.innerHTML = somethingWentWrong;
      loadMoreBtn.style.display = "none";
      
    }
  });
};
getEpisodes();

// renderCharacters

const renderEpisodes = episodes => {
  const murkUp = episodes
    .map(episod => {
      const episodId = `episod-${episodsCounter++}`;
      episodesMap.set(episodId, episod);
      if (episod.episode.includes('S01')) {
        // console.log(1);
        return `<div class="episod-card episod-card-S01" data-episode-id="${episodId}">
      <h3 class="episod-card_title">${episod.name}</h3>
      <div class="episod-card_first-construction-div">
        <p class="episod-card_transperent-text">Season</p>
        <p class="episod-card_transperent-text">Air date</p>
      </div>
      <div class="episod-card_second-construction-div">
        <p class="episod-card_regular-text">1</p>
        <p class="episod-card_regular-text">${episod.air_date}</p>
      </div>
    </div>
  </div>`;
      } else if (episod.episode.includes('S02')) {
        // console.log('else 2');
        return `<div class="episod-card episod-card-S02" data-episode-id="${episodId}">
      <h3 class="episod-card_title">${episod.name}</h3>
      <div class="episod-card_first-construction-div">
        <p class="episod-card_transperent-text">Season</p>
        <p class="episod-card_transperent-text">Air date</p>
      </div>
      <div class="episod-card_second-construction-div">
        <p class="episod-card_regular-text">2</p>
        <p class="episod-card_regular-text">${episod.air_date}</p>
      </div>
    </div>
  </div>`;
      } else if (episod.episode.includes('S03')) {
        // console.log('else 3');
        return `<div class="episod-card episod-card-S03" data-episode-id="${episodId}">
      <h3 class="episod-card_title">${episod.name}</h3>
      <div class="episod-card_first-construction-div">
        <p class="episod-card_transperent-text">Season</p>
        <p class="episod-card_transperent-text">Air date</p>
      </div>
      <div class="episod-card_second-construction-div">
        <p class="episod-card_regular-text">3</p>
        <p class="episod-card_regular-text">${episod.air_date}</p>
      </div>
    </div>
  </div>`;
      } else if (episod.episode.includes('S04')) {
        // console.log('else 4');
        return `<div class="episod-card episod-card-S04" data-episode-id="${episodId}">
      <h3 class="episod-card_title">${episod.name}</h3>
      <div class="episod-card_first-construction-div">
        <p class="episod-card_transperent-text">Season</p>
        <p class="episod-card_transperent-text">Air date</p>
      </div>
      <div class="episod-card_second-construction-div">
        <p class="episod-card_regular-text">4</p>
        <p class="episod-card_regular-text">${episod.air_date}</p>
      </div>
    </div>
  </div>`;
      } else if (episod.episode.includes('S05')) {
        // console.log('else 5');
        return `<div class="episod-card episod-card-S05" data-episode-id="${episodId}">
      <h3 class="episod-card_title">${episod.name}</h3>
      <div class="episod-card_first-construction-div">
        <p class="episod-card_transperent-text">Season</p>
        <p class="episod-card_transperent-text">Air date</p>
      </div>
      <div class="episod-card_second-construction-div">
        <p class="episod-card_regular-text">5</p>
        <p class="episod-card_regular-text">${episod.air_date}</p>
      </div>
    </div>
  </div>`;
      } else if (episod.episode.includes('S06')) {
        // console.log('else 6');
        return `<div class="episod-card episod-card-S06" data-episode-id="${episodId}">
      <h3 class="episod-card_title">${episod.name}</h3>
      <div class="episod-card_first-construction-div">
        <p class="episod-card_transperent-text">Season</p>
        <p class="episod-card_transperent-text">Air date</p>
      </div>
      <div class="episod-card_second-construction-div">
        <p class="episod-card_regular-text">6</p>
        <p class="episod-card_regular-text">${episod.air_date}</p>
      </div>
    </div>
  </div>`;
      }
    })
    .join('');
  visualList.insertAdjacentHTML('beforeend', murkUp);
};

const onError = event => {
  if (window.devicePixelRatio > 1) {
    console.log('Висока щільність пікселів (Retina)');
    // Завантажити зображення @2x
  }
};

select.addEventListener('change', event => {
  episod = event.currentTarget.value;
  console.log(event.currentTarget.value)
  visualList.innerHTML = '';
  limit = 50;
  page = 0;
  getEpisodes();
});

name_input.addEventListener('input', event => {
  name = event.currentTarget.value;
  visualList.innerHTML = '';
  limit = 50;
    page = 0;
  getEpisodes();
    loadMoreBtn.style.display = "none";
});

loadMoreBtn.addEventListener('click', () => {
  getAllEpisodes().then(episodes => {
    // console.log('episodes.length', episodes.results.length);
    let num1 = limit * loadMoreLimit;
    let num2 = limit * loadMoreMultipliyer;
    // console.log(num1);
    // console.log(num2);
    if (episodes.results.length <= num1) {
      // console.log('oooo');
      page++;
        if(page > 3){
          loadMoreBtn.style.display = "none";
          return;
        }
      loadMoreLimit = 0;
      loadMoreMultipliyer = 1;
      // console.log(page);
      getAllEpisodes().then(episodesss => {
        num1 = limit * loadMoreLimit;
        num2 = limit * loadMoreMultipliyer;
        // console.log(num1);
        // console.log(num2);
        // console.log(episodesss);
renderEpisodes(episodesss.results.slice(num1, num2));     
      });
    } else {
      num1 = limit * loadMoreLimit;
      num2 = limit * loadMoreMultipliyer;
      // console.log(num1);
      // console.log(num2);
      renderEpisodes(episodes.results.slice(num1, num2));
    }
  });

  loadMoreLimit++;
  loadMoreMultipliyer++;
  // console.log(loadMoreLimit);
  // console.log(loadMoreMultipliyer);
});

visualList.addEventListener("click" , (event) => {
// console.log(event.currentTarget);
// console.log(event.target);

  const episodeItem = event.target.closest('.episod-card');
  if (episodeItem) {
    // Тут буде твоя дія для елемента дів
    console.log('Клікнули на діву:', episodeItem);
     const episoderId = episodeItem.dataset.episodeId;
     console.log(episoderId);
    const episode = episodesMap.get(episoderId);
    openModal(episode)
  }

})