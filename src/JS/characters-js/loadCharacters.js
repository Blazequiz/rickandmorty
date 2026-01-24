import { getCharacter } from "../services/getCharacters.js";
import { openModal } from "./modal.js";

const somethingWentWrongImg = document.querySelector("#loadWentWrong")
const chactersNameInput = document.querySelector("#characters-filter")
const charactersList = document.querySelector("#charactersList")
const loadMoreBtn = document.querySelector("#getMoreCharactersBtn-js");
const loadingSpinner = document.querySelector("#loadingSpinner")
const selects = document.querySelectorAll(".SelectValues");

export const pageObj = { value: 1 };

// Храним персонажей в Map вместо data-атрибутов
const charactersMap = new Map();
let characterCounter = 0;

loadMoreBtn.style.display = 'none';

// current window width

export function getLimitByScreen() {
  const width = window.innerWidth;

  if (width < 768) return 8;
  if (width < 1024) return 10;
  return 20;
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
  const limit = getLimitByScreen();

  console.log(limit);

  somethingWentWrongImg.style.display = 'none';
  charactersList.innerHTML = ""
  charactersMap.clear();
  characterCounter = 0;

  getCharacter(value, status, gender, species, pageObj.value)
  .then(data => {
    console.log(data)
    const first12Elements = data.results.slice(0, limit)
    console.log(first12Elements);
    renderCharacters(first12Elements)
    loadMoreBtn.style.display = 'block';
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

// render function 

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
    const limit = getLimitByScreen();
    const data = await getCharacter('', '', '', '', 1);
    renderCharacters(data.results.slice(0, limit));
    loadMoreBtn.style.display = 'block';
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