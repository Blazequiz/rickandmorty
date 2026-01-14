import"./modulepreload-polyfill-3cfb730f.js";/* empty css             */const f="https://rickandmortyapi.com/api/character";async function y(o,n,e,c,l){try{const t=await fetch(`${f}?name=${o}&page=${l}&gender=${e}&status=${n}&species=${c}`);return console.log(t),await t.json()}catch(t){console.log(t)}}const p=document.querySelector("#loadWentWrong"),u=document.querySelector("#characters-filter"),h=document.querySelector("#charactersList"),m=document.querySelector("#getMoreCharactersBtn-js"),i=document.querySelector("#loadingSpinner"),r={value:1};m.style.display="none";function v(){const o=window.innerWidth;return o<768?8:o<1024?10:20}async function q(o){r.value=1,i.classList.replace("d-none","d-block");const n=u.value.trim(),e=document.querySelector("#selectStatus").value;let c=document.querySelector("#selectGender").value;const l=document.querySelector("#selectSpecies").value;c==="All"&&(c=""),console.log(n,e,c,l);const t=v();console.log(t),p.style.display="none",h.innerHTML="",y(n,e,c,l,r.value).then(s=>{console.log(s);const g=s.results.slice(0,t);console.log(g),S(g),m.style.display="block",i.classList.replace("d-block","d-none")}).catch(s=>{console.log(s),p.style.display="flex",m.style.display="none",i.classList.replace("d-block","d-none")}),u.value=""}function S(o){const n=o.map(e=>`
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
    `).join("");h.insertAdjacentHTML("beforeend",n)}u.addEventListener("change",q);const a=document.querySelector("#getMoreCharactersBtn-js"),d=document.querySelector("#loadingSpinner"),L=document.querySelector("#loadWentWrong");console.log(a);a.addEventListener("click",async()=>{d.classList.replace("d-none","d-block"),a.style.display="none",console.log(r.value),console.log("Load more clicked");const o=document.querySelector("#selectStatus").value;let n=document.querySelector("#selectGender").value;const e=document.querySelector("#selectSpecies").value,c=document.querySelector("#characters-filter").value.trim();n==="All"&&(n="");const l=v();r.value+=1,y(c,o,n,e,r.value).then(t=>{console.log(t);const s=t.results.slice(0,l);console.log(s),S(s),d.classList.replace("d-block","d-none"),a.style.display="block"}).catch(t=>{console.log(t),L.style.display="block",d.classList.replace("d-block","d-none")})});
