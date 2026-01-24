export function openModal(episode) {
  // Ваша кастомная разметка модалки
  const episodeModal = document.createElement('div');
  episodeModal.className = 'episodes-modal';
  episodeModal.innerHTML = `<div class="episode_modal">
      <button class="episode_modal_close_btn"><svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="episode_modal_svg">
        <path d="M16.5 5.5L5.5 16.5" stroke="#A1D737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.5 5.5L16.5 16.5" stroke="#A1D737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg></button>
      <div class="episode_modal_green_line">
        <h4 class="episode_modal_title">${episode.name}</h4>
        <div class="episode_modal_first_position-div">
          <p class="episode_modal_transperent_text">Id</p>
          <p class="episode_modal_transperent_text">Air date</p>
        </div>
        <div class="episode_modal_second_position-div">
          <p class="episode_modal_regular_text">${episode.id}</p>
          <p class="episode_modal_regular_text">${episode.air_date}</p>
        </div>
        <h4 class="episode_modal_second_title">Characters</h4>
        <p class="episode_modal_transperent_text_special">Major Characters</p>
        <div class="episode_modal_charactes_list">
          
        </div>
      </div>
    </div>`

    document.body.appendChild(episodeModal);
  
  if (episode.characters && episode.characters.length > 0) {
    loadCharacters(episode.characters, episodeModal);
  }
  
  episodeModal.querySelector('.episode_modal_close_btn').addEventListener('click', () => {
    episodeModal.remove();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      console.log('Escape pressed');
      episodeModal.remove();
    }});

  episodeModal.addEventListener('click', (e) => {
    if (e.target === episodeModal) {
      episodeModal.remove();
    }});
}

function loadCharacters(characterUrls, episodeModal) {
  const charactersList = episodeModal.querySelector('.episode_modal_charactes_list');
  
  characterUrls.slice(0, 4).forEach(url => {
    fetch(url)
      .then(res => res.json())
      .then(character => {
        console.log(character);
        const div = document.createElement('div');
        div.className = 'episode_modal_construction-div';
        div.innerHTML = `
        <div class="episode_modal_construction-div">
          <img src="${character.image}" class="episode_modal_character_img"></img>
          <span class="episode_modal_name">${character.name}</span>
          </div>
        `;
        charactersList.appendChild(div);
      })
      .catch(err => console.log('Error loading episode:', err));
  });
}
//          <span class="episode-meta">Season ${character.episode.slice(2, 3)}</span>
        //  <span class="episode-meta">Air date ${episode.air_date}</span>