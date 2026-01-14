import { getCharacter } from "../services/getCharacters.js";
import { getLimitByScreen } from "./loadCharacters.js";
import { renderCharacters } from "./loadCharacters.js";
import { pageObj } from "./loadCharacters.js";

const loadMoreBtn = document.querySelector("#getMoreCharactersBtn-js");
const loadingSpinner = document.querySelector("#loadingSpinner")
const somethingWentWrongImg = document.querySelector("#loadWentWrong")
console.log(loadMoreBtn);


loadMoreBtn.addEventListener("click", async () => {
  loadingSpinner.classList.replace("d-none", "d-block");
  loadMoreBtn.style.display = 'none';
  console.log(pageObj.value)

  console.log("Load more clicked");
  const status = document.querySelector("#selectStatus").value;
  let gender = document.querySelector("#selectGender").value;
  const species = document.querySelector("#selectSpecies").value;
  const value = document.querySelector("#characters-filter").value.trim(); //input
  if (gender === 'All') {
    gender = '';
  }
  const limit = getLimitByScreen();
  pageObj.value += 1;

  getCharacter(value, status, gender, species, pageObj.value)
  .then(data => {
    console.log(data)
    const first12Elements = data.results.slice(0, limit)
    console.log(first12Elements);
    renderCharacters(first12Elements) // the name of first12Elements will be renamed because the manage of elements depends on screen size
    loadingSpinner.classList.replace("d-block", "d-none");
    loadMoreBtn.style.display = 'block';
  })
  .catch( error => {
    console.log(error)
    somethingWentWrongImg.style.display = 'block';
    loadingSpinner.classList.replace("d-block", "d-none");
  })

});