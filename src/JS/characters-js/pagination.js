import { getCharacter } from "../services/getCharacters.js";
import { showNextBatch, initCache } from "./loadCharacters.js";
import { pageObj } from "./loadCharacters.js";
import { openModal } from "./modal.js";
import "../../SASS/layout/characters/_characters-filter.scss";

const loadMoreBtn = document.querySelector("#getMoreCharactersBtn-js");
const loadingSpinner = document.querySelector("#loadingSpinner")
const somethingWentWrongImg = document.querySelector("#loadWentWrong")
const charactersList = document.querySelector("#charactersList")
console.log(loadMoreBtn);


loadMoreBtn.addEventListener("click", async () => {
  const hasMore = showNextBatch();
  
  if (!hasMore) {
    loadingSpinner.classList.replace("d-none", "d-block");
    loadMoreBtn.style.display = 'none';
    console.log(`Load more clicked - fetching page ${pageObj.value + 1}`);
    
    const status = document.querySelector("#selectStatus").value;
    let gender = document.querySelector("#selectGender").value;
    const species = document.querySelector("#selectSpecies").value;
    const value = document.querySelector("#characters-filter").value.trim();
    if (gender === 'All') {
      gender = '';
    }
    
    pageObj.value += 1;

    getCharacter(value, status, gender, species, pageObj.value)
    .then(data => {
      console.log(data)
      if (!data || !data.results || data.results.length === 0) {
        // Нет больше результатов
        loadMoreBtn.style.display = 'none';
        loadingSpinner.classList.replace("d-block", "d-none");
        somethingWentWrongImg.style.display = 'flex';
        charactersList.innerHTML = "";
        return;
      }
      
      initCache(data.results);
      showNextBatch();
      
      loadingSpinner.classList.replace("d-block", "d-none");
    })
    .catch( error => {
      console.log(error)
      somethingWentWrongImg.style.display = 'flex';
      loadingSpinner.classList.replace("d-block", "d-none");
      loadMoreBtn.style.display = 'none';
    })
  }
});