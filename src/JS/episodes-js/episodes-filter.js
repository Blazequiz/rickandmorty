const BASE_URL = 'https://rickandmortyapi.com/api/episode';
const name_input = document.querySelector('#name_input');
const select = document.querySelector('#select');
const visualList = document.querySelector('#episops_list');

let episod = '';
let episodsCounter = 0;
// const episodesMap = new Map();
let name = '';

const getLimitByScreen = () => {
  const width = window.innerWidth;

  if (width < 1200) return 10;
  return 20;
}

let limit = getLimitByScreen();
// fetch




const getAllEpisodes = () => {
  return fetch(`${BASE_URL}?episode=${episod}&name=${name}`).then(responce => {
    return responce.json();
  });
};


const getEpisodes = (event) => {

  getAllEpisodes().then(episodes => {
    // console.log(episodes)
    // console.log(episodes.results.slice(0, limit))
renderEpisodes(episodes.results.slice(0, limit))
});
}
getEpisodes()

// renderCharacters

const renderEpisodes = episodes => {
  const murkUp = episodes.map(episod => {
    const episodId = `episod-${episodsCounter++}`;
    // episodesMap.set(episodId, episod);
if(episod.episode.includes("S01")){
  console.log(1)
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
} else if(episod.episode.includes("S02")){
  console.log('else 2')
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
} else if(episod.episode.includes("S03")){
  console.log('else 3')
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
} else if(episod.episode.includes("S04")){
  console.log('else 4')
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
} else if(episod.episode.includes("S05")){
  console.log('else 5')
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
} else if(episod.episode.includes("S06")){
  console.log('else 6')
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
  //   return `<div class="episod-card" data-episode-id="${episodId}">
  //     <h3 class="episod-card_title">${episod.name}</h3>
  //     <div class="episod-card_first-construction-div">
  //       <p class="episod-card_transperent-text">Season</p>
  //       <p class="episod-card_transperent-text">Air date</p>
  //     </div>
  //     <div class="episod-card_second-construction-div">
  //       <p class="episod-card_regular-text">1</p>
  //       <p class="episod-card_regular-text">${episod.air_date}</p>
  //     </div>
  //   </div>
  // </div>`;
  }).join('');
  visualList.insertAdjacentHTML("beforeend" , murkUp)
};

// const onChangeSelect = (event) =>{
//     const selectedOptionValue = event.currentTarget.value;
//     if(selectedOptionValue == 'common'){
//         renderEpisodes()
//     }
// }

select.addEventListener("change" , (event) => {
  episod = event.currentTarget.value;
  visualList.innerHTML = '';
  getEpisodes()
})

name_input.addEventListener("input" , (event) => {
  name = event.currentTarget.value;
  visualList.innerHTML = '';
  getEpisodes()
})