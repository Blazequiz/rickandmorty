export function openModal(character) {
  // Ваша кастомная разметка модалки
  const modal = document.createElement('div');
  modal.className = 'custom-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 5.5L5.5 16.5" stroke="#A1D737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.5 5.5L16.5 16.5" stroke="#A1D737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      </button>
      
      <div class="modal-body">
        <div class="modal-left">
          <div class="modal-image">
            <img src="${character.image}" alt="${character.name}">
          </div>
          <div class="modal-info">
            <div class="modal-info-row">
              <span class="modal-info-label">Status</span>
              <span class="modal-info-label">Species</span>
              <span class="modal-info-label">Gender</span>
              <span class="modal-info-label">Origin</span>
            </div>
            <div class="modal-info-values">
              <span>${character.status}</span>
              <span>${character.species}</span>
              <span>${character.gender}</span>
              <span>${character.origin.name}</span>
            </div>
            <div class="modal-info-row" style="margin-top: 12px;">
              <span class="modal-info-label">Location</span>
              <span class="modal-info-label">Type</span>
            </div>
            <div class="modal-info-values">
              <span>${character.location.name}</span>
              <span>${character.type || 'Unknown'}</span>
            </div>
          </div>
        </div>
        
        <div class="modal-right">
          <h2 class="modal-episodes-title">Episodes</h2>
          <ul class="modal-episodes-list">
            <!-- Episodes will be added here -->
          </ul>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  
  if (character.episode && character.episode.length > 0) {
    loadEpisodes(character.episode, modal);
  }
  
  modal.querySelector('.modal-close').addEventListener('click', () => {
    modal.remove();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      console.log('Escape pressed');
      modal.remove();
    }});

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }});
}

function loadEpisodes(episodeUrls, modal) {
  const episodesList = modal.querySelector('.modal-episodes-list');
  
  episodeUrls.forEach(url => {
    fetch(url)
      .then(res => res.json())
      .then(episode => {
        console.log(episode);
        const li = document.createElement('li');
        li.className = 'episode-item';
        li.innerHTML = `
          <span class="episode-title">${episode.name}</span>
          <span class="episode-meta">Season ${episode.episode.slice(2, 3)}</span>
          <span class="episode-meta">Air date ${episode.air_date}</span>
        `;
        episodesList.appendChild(li);
      })
      .catch(err => console.log('Error loading episode:', err));
  });
}