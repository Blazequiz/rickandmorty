import { getCharacter } from "../services/getCharacters.js";
import { openModal } from "./modal.js";

const somethingWentWrongImg = document.querySelector("#loadWentWrong")
const chactersNameInput = document.querySelector("#characters-filter")
const charactersList = document.querySelector("#charactersList")
const loadMoreBtn = document.querySelector("#getMoreCharactersBtn-js");
const loadingSpinner = document.querySelector("#loadingSpinner")
const selects = document.querySelectorAll(".SelectValues");

export const pageObj = { value: 1 };

const charactersMap = new Map();
let characterCounter = 0;

let cachedCharacters = [];
let cachedIndex = 0;

loadMoreBtn.style.display = 'none';

// current window width

export function getLimitByScreen() {
  const width = window.innerWidth;

  if (width < 768) return 8;
  if (width < 1024) return 10;
  return 20;
}

export function showNextBatch() {
  const limit = getLimitByScreen();
  const nextBatch = cachedCharacters.slice(cachedIndex, cachedIndex + limit);
  
  if (nextBatch.length === 0) {
    return false;
  }

  renderCharacters(nextBatch);
  cachedIndex += limit;

  if (cachedIndex < cachedCharacters.length) {
    loadMoreBtn.style.display = 'block';
  } else {
    loadMoreBtn.style.display = 'block';
  }

  return true;
}

export function initCache(characters) {
  cachedCharacters = characters;
  cachedIndex = 0;
  
  if (characters.length > 0) {
    loadMoreBtn.style.display = 'block';
  } else {
    loadMoreBtn.style.display = 'none';
  }
}


async function onChangeGetCharacters(e) {
  pageObj.value = 1;
  loadingSpinner.classList.replace("d-none", "d-block");

  const value = chactersNameInput.value.trim(); //input
  const status = document.querySelector("#selectStatus").value;
  let gender = document.querySelector("#selectGender").value;
  const species = document.querySelector("#selectSpecies").value;
  if (gender === 'All') {
    gender = '';
  }
  console.log(value, status,  gender, species);

  somethingWentWrongImg.style.display = 'none';
  charactersList.innerHTML = ""
  charactersMap.clear();
  characterCounter = 0;

  getCharacter(value, status, gender, species, pageObj.value)
  .then(data => {
    console.log(data)
    if (!data || !data.results) {
      throw new Error("No results received from API");
    }
    
    initCache(data.results);
    showNextBatch();
    
    loadingSpinner.classList.replace("d-block", "d-none");
  })
  .catch( error => {
    console.log(error)
    somethingWentWrongImg.style.display = 'flex';
    loadMoreBtn.style.display = 'none';
    loadingSpinner.classList.replace("d-block", "d-none");
  })

  // chactersNameInput.value = '';
}

export function renderCharacters(characters) {
  const markup = characters.map( character => {
    const characterId = `char-${characterCounter++}`;
    charactersMap.set(characterId, character);
    
    return `
      <li class="characters-list-item" data-character-id="${characterId}" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500">
        <div class="img-container">
          <img src="${character.image}" alt="${character.name}">
        </div>
        <h3 class="characters-list-item-title">
          ${character.name}
        </h3>
        <div class="characters-list-item-information">
          <div>
            <p><span class="characters-list-item-information-decoration">Origin:</span>  ${character.location.name}</p>
          </div>
          <div>
            <p><span class="characters-list-item-information-decoration">Origin:</span> ${character.origin.name}</p>
          </div>
        </div>
      </li>    
    `
  }).join("")

  charactersList.insertAdjacentHTML("beforeend", markup)
}

async function loadInitialCharacters() {
  loadingSpinner.classList.replace("d-none", "d-block");
  somethingWentWrongImg.style.display = 'none';
  
  try {
    const data = await getCharacter('', '', '', '', 1);
    initCache(data.results);
    showNextBatch();
  } catch (error) {
    console.log(error);
    somethingWentWrongImg.style.display = 'flex';
    loadMoreBtn.style.display = 'none';
  } finally {
    loadingSpinner.classList.replace("d-block", "d-none");
  }
}

charactersList.addEventListener("click", (e) => {
  const characterItem = e.target.closest(".characters-list-item");
  if (characterItem) {
    const characterId = characterItem.dataset.characterId;
    const character = charactersMap.get(characterId);
    if (character) {
      openModal(character);
    }
  }
});



chactersNameInput.addEventListener("change", onChangeGetCharacters)
selects.forEach( select => {
  select.addEventListener("change", onChangeGetCharacters)
})

loadInitialCharacters();