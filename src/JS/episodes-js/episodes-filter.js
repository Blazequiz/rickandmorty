const BASE_URL = 'https://rickandmortyapi.com/api/episode';
const name_input = document.querySelector('#name_input');
const select = document.querySelector('#select');
const visualList = document.querySelector('#episops_list');
// import imageSeason1 from "../../img/episodes/imageSeason1.png"

let episod = '';
let episodsCounter = 0;
const episodesMap = new Map();
let name = '';

// fetch

// const options = {
//   method: 'GET',
// };

const getAllEpisodes = () => {
  return fetch(`${BASE_URL}?episode=${episod}&name=${name}`).then(responce => {
    return responce.json();
  });
};


const getEpisodes = (event) => {

  getAllEpisodes().then(episodes => {
    console.log(episodes)
renderEpisodes(episodes.results)
});
}
getEpisodes()

// renderCharacters

const renderEpisodes = episodes => {
  const murkUp = episodes.map(episod => {
    const episodId = `episod-${episodsCounter++}`;
    // episodesMap.set(episodId, episod);

    return `<div class="episod-card" data-episode-id="${episodId}">
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