import "./loadCharacters";
import "../services/getCharacters.js";
import "./pagination.js";


function redirectToHomePage() {
  const returnButton = document.querySelector(".characters_return_button");
  if (!returnButton) return;
  returnButton.addEventListener("click", () => {
    window.location.href = "index.html"; 
  });
}

redirectToHomePage();