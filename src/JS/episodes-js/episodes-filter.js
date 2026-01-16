const BASEURL = 'https://rickandmortyapi.com/api/episode';
const name_input = document.querySelector('#name_input');
const select = document.querySelector('#select');
const visualList = document.querySelector('#episops_list');

let episod = '';
let episodsCounter = 0;
const episodesMap = new Map();

// fetch

const options = {
  method: 'GET',
};

const getAllEpisodes = () => {
  return fetch(`${BASEURL}?episode=${episod}`, options).then(responce => {
    return responce.json();
  });
};

getAllEpisodes().then(result => {
  // console.log(result)
  // console.log(result.results)
  result.results.map(episod => {
    console.log(episod);
    // console.log(episod.name)
  });
});

// renderCharacters

const renderEpisodes = episodes => {
  const murkUp = episodes.map(episod => {
    const episodId = `episod-${episodsCounter++}`;
    episodesMap.set(episodId, episod);

    return `<div class="episod-card" data-episode-id="${episodId}">
      <h3 class="episod-card_title">${episod.name}</h3>
      <div class="episod-card_first-construction-div">
        <p class="episod-card_transperent-text">Season</p>
        <p class="episod-card_transperent-text">Air date</p>
      </div>
      <div class="episod-card_second-construction-div">
        <p class="episod-card_regular-text">1</p>
        <p class="episod-card_regular-text">${air_date}</p>
      </div>
    </div>
  </div>`;
  }).join('');
  visualList.insertAdjacentElement("beforeend" , murkUp)
};

// const onChangeSelect = (event) =>{
//     const selectedOptionValue = event.currentTarget.value;
//     if(selectedOptionValue == 'common'){
//         renderEpisodes()
//     }
// }

select.addEventListener("change" , renderEpisodes)