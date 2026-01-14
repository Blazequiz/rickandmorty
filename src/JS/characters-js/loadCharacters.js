import { getCharacter } from "../services/getCharacters.js";

const somethingWentWrongImg = document.querySelector("#loadWentWrong")
const chactersNameInput = document.querySelector("#characters-filter")
const charactersList = document.querySelector("#charactersList")
const loadMoreBtn = document.querySelector("#getMoreCharactersBtn-js");
const loadingSpinner = document.querySelector("#loadingSpinner")
export const pageObj = { value: 1 };
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

  chactersNameInput.value = '';
}

// render function 

export function renderCharacters(characters) {
  const markup = characters.map( character => {
    return `
      <li class="characters-list-item">
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



chactersNameInput.addEventListener("change", onChangeGetCharacters)