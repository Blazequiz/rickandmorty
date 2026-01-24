import"./modulepreload-polyfill-3cfb730f.js";/* empty css             */const b="https://rickandmortyapi.com/api/character";async function g(e,s,n,o,a){try{const t=await fetch(`${b}?name=${e}&page=${a}&gender=${n}&status=${s}&species=${o}`);return console.log(t),await t.json()}catch(t){console.log(t)}}function w(e){const s=document.createElement("div");s.className="custom-modal",s.innerHTML=`
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
  `,document.body.appendChild(s),e.episode&&e.episode.length>0&&E(e.episode,s),s.querySelector(".modal-close").addEventListener("click",()=>{s.remove()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&(console.log("Escape pressed"),s.remove())}),s.addEventListener("click",n=>{n.target===s&&s.remove()})}function E(e,s){const n=s.querySelector(".modal-episodes-list");e.forEach(o=>{fetch(o).then(a=>a.json()).then(a=>{console.log(a);const t=document.createElement("li");t.className="episode-item",t.innerHTML=`
          <span class="episode-title">${a.name}</span>
          <span class="episode-meta">Season ${a.episode.slice(2,3)}</span>
          <span class="episode-meta">Air date ${a.air_date}</span>
        `,n.appendChild(t)}).catch(a=>console.log("Error loading episode:",a))})}const u=document.querySelector("#loadWentWrong"),L=document.querySelector("#characters-filter"),y=document.querySelector("#charactersList"),l=document.querySelector("#getMoreCharactersBtn-js"),r=document.querySelector("#loadingSpinner"),q=document.querySelectorAll(".SelectValues"),d={value:1},v=new Map;let k=0,h=[],c=0;l.style.display="none";function M(){const e=window.innerWidth;return e<768?8:e<1024?10:20}function m(){const e=M(),s=h.slice(c,c+e);return s.length===0?!1:(C(s),c+=e,c<h.length,l.style.display="block",!0)}function f(e){h=e,c=0,e.length>0?l.style.display="block":l.style.display="none"}async function $(e){d.value=1,r.classList.replace("d-none","d-block");const s=L.value.trim(),n=document.querySelector("#selectStatus").value;let o=document.querySelector("#selectGender").value;const a=document.querySelector("#selectSpecies").value;o==="All"&&(o=""),console.log(s,n,o,a),u.style.display="none",y.innerHTML="",v.clear(),k=0,g(s,n,o,a,d.value).then(t=>{if(console.log(t),!t||!t.results)throw new Error("No results received from API");f(t.results),m(),r.classList.replace("d-block","d-none")}).catch(t=>{console.log(t),u.style.display="flex",l.style.display="none",r.classList.replace("d-block","d-none")})}function C(e){const s=e.map(n=>{const o=`char-${k++}`;return v.set(o,n),`
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
    `}).join("");y.insertAdjacentHTML("beforeend",s)}async function x(){r.classList.replace("d-none","d-block"),u.style.display="none";try{const e=await g("","","","",1);f(e.results),m()}catch(e){console.log(e),u.style.display="flex",l.style.display="none"}finally{r.classList.replace("d-block","d-none")}}y.addEventListener("click",e=>{const s=e.target.closest(".characters-list-item");if(s){const n=s.dataset.characterId,o=v.get(n);o&&w(o)}});L.addEventListener("change",$);q.forEach(e=>{e.addEventListener("change",$)});x();const i=document.querySelector("#getMoreCharactersBtn-js"),p=document.querySelector("#loadingSpinner"),S=document.querySelector("#loadWentWrong"),A=document.querySelector("#charactersList");console.log(i);i.addEventListener("click",async()=>{if(!m()){p.classList.replace("d-none","d-block"),i.style.display="none",console.log(`Load more clicked - fetching page ${d.value+1}`);const s=document.querySelector("#selectStatus").value;let n=document.querySelector("#selectGender").value;const o=document.querySelector("#selectSpecies").value,a=document.querySelector("#characters-filter").value.trim();n==="All"&&(n=""),d.value+=1,g(a,s,n,o,d.value).then(t=>{if(console.log(t),!t||!t.results||t.results.length===0){i.style.display="none",p.classList.replace("d-block","d-none"),S.style.display="flex",A.innerHTML="";return}f(t.results),m(),p.classList.replace("d-block","d-none")}).catch(t=>{console.log(t),S.style.display="flex",p.classList.replace("d-block","d-none"),i.style.display="none"})}});function B(){const e=document.querySelector(".characters_return_button");e&&e.addEventListener("click",()=>{window.location.href="index.html"})}B();
