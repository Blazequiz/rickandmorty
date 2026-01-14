import"./modulepreload-polyfill-3cfb730f.js";/* empty css             */const a="https://rickandmortyapi.com/api/character";async function l(t,c,e,s){try{const n=await fetch(`${a}?name=${t}`);return console.log(n),await n.json()}catch(n){console.log(n)}}const o=document.querySelector("#loadWentWrong"),r=document.querySelector("#characters-filter"),i=document.querySelector("#charactersList");function m(){const t=window.innerWidth;return t<768?8:t<1024?10:20}async function u(t){const c=r.value.trim();document.querySelector("#selectStatus").value,document.querySelector("#selectGender").value,document.querySelector("#selectSpecies").value;const e=m();console.log(e),o.style.display="none",i.innerHTML="",l(c).then(s=>{console.log(s);const n=s.results.slice(0,e);console.log(n),d(n)}).catch(s=>{console.log(s),o.style.display="block"}),r.value=""}function d(t){const c=t.map(e=>`
      <li class="characters-list-item">
        <div class="img-container">
          <img src="${e.image}" alt="${e.name}">
        </div>
        <h3 class="characters-list-item-title">
          ${e.name}
        </h3>
        <div class="characters-list-item-information">
          <div>
            <p><span class="characters-list-item-information-decoration">Origin:</span>  ${e.location.name}</p>
          </div>
          <div>
            <p><span class="characters-list-item-information-decoration">Origin:</span> ${e.origin.name}</p>
          </div>
        </div>
      </li>    
    `).join("");console.log(c),i.insertAdjacentHTML("beforeend",c)}r.addEventListener("change",u);
