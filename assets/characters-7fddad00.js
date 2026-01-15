import"./modulepreload-polyfill-3cfb730f.js";/* empty css             */const $="https://rickandmortyapi.com/api/character";async function y(e,s,n,o,a){try{const t=await fetch(`${$}?name=${e}&page=${a}&gender=${n}&status=${s}&species=${o}`);return console.log(t),await t.json()}catch(t){console.log(t)}}function L(e){const s=document.createElement("div");s.className="custom-modal",s.innerHTML=`
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
            <img src="${e.image}" alt="${e.name}">
          </div>
          <div class="modal-info">
            <div class="modal-info-row">
              <span class="modal-info-label">Status</span>
              <span class="modal-info-label">Species</span>
              <span class="modal-info-label">Gender</span>
              <span class="modal-info-label">Origin</span>
            </div>
            <div class="modal-info-values">
              <span>${e.status}</span>
              <span>${e.species}</span>
              <span>${e.gender}</span>
              <span>${e.origin.name}</span>
            </div>
            <div class="modal-info-row" style="margin-top: 12px;">
              <span class="modal-info-label">Location</span>
              <span class="modal-info-label">Type</span>
            </div>
            <div class="modal-info-values">
              <span>${e.location.name}</span>
              <span>${e.type||"Unknown"}</span>
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
  `,document.body.appendChild(s),e.episode&&e.episode.length>0&&b(e.episode,s),s.querySelector(".modal-close").addEventListener("click",()=>{s.remove()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&(console.log("Escape pressed"),s.remove())}),s.addEventListener("click",n=>{n.target===s&&s.remove()})}function b(e,s){const n=s.querySelector(".modal-episodes-list");e.forEach(o=>{fetch(o).then(a=>a.json()).then(a=>{console.log(a);const t=document.createElement("li");t.className="episode-item",t.innerHTML=`
          <span class="episode-title">${a.name}</span>
          <span class="episode-meta">Season ${a.episode.slice(2,3)}</span>
          <span class="episode-meta">Air date ${a.air_date}</span>
        `,n.appendChild(t)}).catch(a=>console.log("Error loading episode:",a))})}const h=document.querySelector("#loadWentWrong"),p=document.querySelector("#characters-filter"),u=document.querySelector("#charactersList"),m=document.querySelector("#getMoreCharactersBtn-js"),r=document.querySelector("#loadingSpinner"),c={value:1},g=new Map;let f=0;m.style.display="none";function S(){const e=window.innerWidth;return e<768?8:e<1024?10:20}async function w(e){c.value=1,r.classList.replace("d-none","d-block");const s=p.value.trim(),n=document.querySelector("#selectStatus").value;let o=document.querySelector("#selectGender").value;const a=document.querySelector("#selectSpecies").value;o==="All"&&(o=""),console.log(s,n,o,a);const t=S();console.log(t),h.style.display="none",u.innerHTML="",g.clear(),f=0,y(s,n,o,a,c.value).then(l=>{console.log(l);const v=l.results.slice(0,t);console.log(v),k(v),m.style.display="block",r.classList.replace("d-block","d-none")}).catch(l=>{console.log(l),h.style.display="flex",m.style.display="none",r.classList.replace("d-block","d-none")}),p.value=""}function k(e){const s=e.map(n=>{const o=`char-${f++}`;return g.set(o,n),`
      <li class="characters-list-item" data-character-id="${o}" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500">
        <div class="img-container">
          <img src="${n.image}" alt="${n.name}">
        </div>
        <h3 class="characters-list-item-title">
          ${n.name}
        </h3>
        <div class="characters-list-item-information">
          <div>
            <p><span class="characters-list-item-information-decoration">Origin:</span>  ${n.location.name}</p>
          </div>
          <div>
            <p><span class="characters-list-item-information-decoration">Origin:</span> ${n.origin.name}</p>
          </div>
        </div>
      </li>    
    `}).join("");u.insertAdjacentHTML("beforeend",s)}u.addEventListener("click",e=>{const s=e.target.closest(".characters-list-item");if(s){const n=s.dataset.characterId,o=g.get(n);o&&L(o)}});p.addEventListener("change",w);const i=document.querySelector("#getMoreCharactersBtn-js"),d=document.querySelector("#loadingSpinner"),E=document.querySelector("#loadWentWrong");console.log(i);i.addEventListener("click",async()=>{d.classList.replace("d-none","d-block"),i.style.display="none",console.log(c.value),console.log("Load more clicked");const e=document.querySelector("#selectStatus").value;let s=document.querySelector("#selectGender").value;const n=document.querySelector("#selectSpecies").value,o=document.querySelector("#characters-filter").value.trim();s==="All"&&(s="");const a=S();c.value+=1,y(o,e,s,n,c.value).then(t=>{console.log(t);const l=t.results.slice(0,a);console.log(l),k(l),d.classList.replace("d-block","d-none"),i.style.display="block"}).catch(t=>{console.log(t),E.style.display="block",d.classList.replace("d-block","d-none")})});function q(){const e=document.querySelector(".characters_return_button");e&&e.addEventListener("click",()=>{window.location.href="index.html"})}q();
