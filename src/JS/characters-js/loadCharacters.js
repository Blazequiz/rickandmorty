import { getCharacter } from "../services/getCharacters.js";

const somethingWentWrongImg = document.querySelector("#loadWentWrong")
const chactersNameInput = document.querySelector("#characters-filter")
const charactersList = document.querySelector("#charactersList")

// current window width

function getLimitByScreen() {
  const width = window.innerWidth;

  if (width < 768) return 8;
  if (width < 1024) return 10;
  return 20;
}

async function onChangeGetCharacters(e) {
  const value = chactersNameInput.value.trim(); //input
  const status = document.querySelector("#selectStatus").value;
  const gender = document.querySelector("#selectGender").value;
  const species = document.querySelector("#selectSpecies").value;
  const limit = getLimitByScreen();

  console.log(limit);

  somethingWentWrongImg.style.display = 'none';
  charactersList.innerHTML = ""

  getCharacter(value, status, gender, species)
  .then(data => {
    console.log(data)
    const first12Elements = data.results.slice(0, limit)
    console.log(first12Elements);
    renderCharacters(first12Elements)
  })
  .catch( error => {
    console.log(error)
    somethingWentWrongImg.style.display = 'block';
  })

  chactersNameInput.value = ''; 
}

// render function 

function renderCharacters(characters) {
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
  console.log(markup);
  charactersList.insertAdjacentHTML("beforeend", markup)
}



chactersNameInput.addEventListener("change", onChangeGetCharacters)