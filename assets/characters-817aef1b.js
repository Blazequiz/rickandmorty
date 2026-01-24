import"./modulepreload-polyfill-3cfb730f.js";/* empty css             */const $="https://rickandmortyapi.com/api/character";async function u(e,s,n,o,a){try{const t=await fetch(`${$}?name=${e}&page=${a}&gender=${n}&status=${s}&species=${o}`);return console.log(t),await t.json()}catch(t){console.log(t)}}function b(e){const s=document.createElement("div");s.className="custom-modal",s.innerHTML=`
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
  `,document.body.appendChild(s),e.episode&&e.episode.length>0&&w(e.episode,s),s.querySelector(".modal-close").addEventListener("click",()=>{s.remove()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&(console.log("Escape pressed"),s.remove())}),s.addEventListener("click",n=>{n.target===s&&s.remove()})}function w(e,s){const n=s.querySelector(".modal-episodes-list");e.forEach(o=>{fetch(o).then(a=>a.json()).then(a=>{console.log(a);const t=document.createElement("li");t.className="episode-item",t.innerHTML=`
          <span class="episode-title">${a.name}</span>
          <span class="episode-meta">Season ${a.episode.slice(2,3)}</span>
          <span class="episode-meta">Air date ${a.air_date}</span>
        `,n.appendChild(t)}).catch(a=>console.log("Error loading episode:",a))})}const p=document.querySelector("#loadWentWrong"),S=document.querySelector("#characters-filter"),g=document.querySelector("#charactersList"),d=document.querySelector("#getMoreCharactersBtn-js"),i=document.querySelector("#loadingSpinner"),E=document.querySelectorAll(".SelectValues"),r={value:1},v=new Map;let L=0;d.style.display="none";function y(){const e=window.innerWidth;return e<768?8:e<1024?10:20}async function k(e){r.value=1,i.classList.replace("d-none","d-block");const s=S.value.trim(),n=document.querySelector("#selectStatus").value;let o=document.querySelector("#selectGender").value;const a=document.querySelector("#selectSpecies").value;o==="All"&&(o=""),console.log(s,n,o,a);const t=y();console.log(t),p.style.display="none",g.innerHTML="",v.clear(),L=0,u(s,n,o,a,r.value).then(l=>{console.log(l);const f=l.results.slice(0,t);console.log(f),h(f),d.style.display="block",i.classList.replace("d-block","d-none")}).catch(l=>{console.log(l),p.style.display="flex",d.style.display="none",i.classList.replace("d-block","d-none")})}function h(e){const s=e.map(n=>{const o=`char-${L++}`;return v.set(o,n),`
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
    `}).join("");g.insertAdjacentHTML("beforeend",s)}async function q(){i.classList.replace("d-none","d-block"),p.style.display="none";try{const e=y(),s=await u("","","","",1);h(s.results.slice(0,e)),d.style.display="block"}catch(e){console.log(e),p.style.display="flex",d.style.display="none"}finally{i.classList.replace("d-block","d-none")}}g.addEventListener("click",e=>{const s=e.target.closest(".characters-list-item");if(s){const n=s.dataset.characterId,o=v.get(n);o&&b(o)}});S.addEventListener("change",k);E.forEach(e=>{e.addEventListener("change",k)});q();const c=document.querySelector("#getMoreCharactersBtn-js"),m=document.querySelector("#loadingSpinner"),M=document.querySelector("#loadWentWrong"),C=document.querySelector("#charactersList");console.log(c);c.addEventListener("click",async()=>{m.classList.replace("d-none","d-block"),c.style.display="none",console.log(r.value),console.log("Load more clicked");const e=document.querySelector("#selectStatus").value;let s=document.querySelector("#selectGender").value;const n=document.querySelector("#selectSpecies").value,o=document.querySelector("#characters-filter").value.trim();s==="All"&&(s="");const a=y();r.value+=1,u(o,e,s,n,r.value).then(t=>{if(console.log(t),!t||!t.results)throw new Error("No results received from API");const l=t.results.slice(0,a);console.log(l),h(l),m.classList.replace("d-block","d-none"),c.style.display="block"}).catch(t=>{console.log(t),M.style.display="flex",m.classList.replace("d-block","d-none"),C.innerHTML="",c.style.display="none"})});function A(){const e=document.querySelector(".characters_return_button");e&&e.addEventListener("click",()=>{window.location.href="index.html"})}A();
