import"./modulepreload-polyfill-3cfb730f.js";/* empty css             */const $="/rickandmorty/assets/text_logo_gl-92500735.png",p=document.querySelector("#header_text_logo_img"),w="./img/together/text_logo.png";p.addEventListener("mouseover",()=>{p.src=$});p.addEventListener("mouseout",()=>{p.src=w});function k(s){const t=document.createElement("div");t.className="episodes-modal",t.innerHTML=`<div class="episode_modal">
      <button class="episode_modal_close_btn"><svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="episode_modal_svg">
        <path d="M16.5 5.5L5.5 16.5" stroke="#A1D737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.5 5.5L16.5 16.5" stroke="#A1D737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg></button>
      <div class="episode_modal_green_line">
        <h4 class="episode_modal_title">${s.name}</h4>
        <div class="episode_modal_first_position-div">
          <p class="episode_modal_transperent_text">Id</p>
          <p class="episode_modal_transperent_text">Air date</p>
        </div>
        <div class="episode_modal_second_position-div">
          <p class="episode_modal_regular_text">${s.id}</p>
          <p class="episode_modal_regular_text">${s.air_date}</p>
        </div>
        <h4 class="episode_modal_second_title">Characters</h4>
        <p class="episode_modal_transperent_text_special">Major Characters</p>
        <div class="episode_modal_charactes_list">
          
        </div>
      </div>
    </div>`,document.body.appendChild(t),s.characters&&s.characters.length>0&&L(s.characters,t),t.querySelector(".episode_modal_close_btn").addEventListener("click",()=>{t.remove()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(console.log("Escape pressed"),t.remove())}),t.addEventListener("click",e=>{e.target===t&&t.remove()})}function L(s,t){const e=t.querySelector(".episode_modal_charactes_list");s.slice(0,4).forEach(d=>{fetch(d).then(o=>o.json()).then(o=>{console.log(o);const _=document.createElement("div");_.className="episode_modal_construction-div",_.innerHTML=`
        <div class="episode_modal_construction-div">
          <img src="${o.image}" class="episode_modal_character_img"></img>
          <span class="episode_modal_name">${o.name}</span>
          </div>
        `,e.appendChild(_)}).catch(o=>console.log("Error loading episode:",o))})}const E="https://rickandmortyapi.com/api/episode",M=document.querySelector("#name_input"),b=document.querySelector("#select"),l=document.querySelector("#episops_list"),a=document.querySelector("#load_more_episodes");let u="",A=0;const f=new Map;let y="",r=0,c=1,n=1;const q=`<div class="ops_position-div">
      <img src="./img/together/oops_mobile_1x.png" alt="зелений портал з якого наполовину вилізли Рік і Морті" srcset="./img/together/oops_mobile_1x.png 284w, ./img/together/oops_mobile_2x.png 568w, ./img/together/oops_tablet_and_desktop_1x.png 388w, ./img/together/oops_tablet_and_desktop_2x.png 776w, 100vw" sizes="(min-width: 768px) 388px, (max-width: 768px) 284px, 100vw" class="ops_img">
      <p class="ops_paragraf">Oops! Try looking for something else...</p>
      </div>`,T=()=>window.innerWidth<1200?10:20;let i=T();const m=()=>(a.style.display="block",u!==""&&(a.style.display="none"),fetch(`${E}?episode=${u}&name=${y}&page=${n}`).then(s=>s.json())),h=s=>{m().then(t=>{try{g(t.results.slice(0,i))}catch{console.log("error"),l.innerHTML=q,a.style.display="none"}})};h();const g=s=>{const t=s.map(e=>{const d=`episod-${A++}`;if(f.set(d,e),e.episode.includes("S01"))return`<div class="episod-card episod-card-S01" data-episode-id="${d}">
      <h3 class="episod-card_title">${e.name}</h3>
      <div class="episod-card_first-construction-div">
        <p class="episod-card_transperent-text">Season</p>
        <p class="episod-card_transperent-text">Air date</p>
      </div>
      <div class="episod-card_second-construction-div">
        <p class="episod-card_regular-text">1</p>
        <p class="episod-card_regular-text">${e.air_date}</p>
      </div>
    </div>
  </div>`;if(e.episode.includes("S02"))return`<div class="episod-card episod-card-S02" data-episode-id="${d}">
      <h3 class="episod-card_title">${e.name}</h3>
      <div class="episod-card_first-construction-div">
        <p class="episod-card_transperent-text">Season</p>
        <p class="episod-card_transperent-text">Air date</p>
      </div>
      <div class="episod-card_second-construction-div">
        <p class="episod-card_regular-text">2</p>
        <p class="episod-card_regular-text">${e.air_date}</p>
      </div>
    </div>
  </div>`;if(e.episode.includes("S03"))return`<div class="episod-card episod-card-S03" data-episode-id="${d}">
      <h3 class="episod-card_title">${e.name}</h3>
      <div class="episod-card_first-construction-div">
        <p class="episod-card_transperent-text">Season</p>
        <p class="episod-card_transperent-text">Air date</p>
      </div>
      <div class="episod-card_second-construction-div">
        <p class="episod-card_regular-text">3</p>
        <p class="episod-card_regular-text">${e.air_date}</p>
      </div>
    </div>
  </div>`;if(e.episode.includes("S04"))return`<div class="episod-card episod-card-S04" data-episode-id="${d}">
      <h3 class="episod-card_title">${e.name}</h3>
      <div class="episod-card_first-construction-div">
        <p class="episod-card_transperent-text">Season</p>
        <p class="episod-card_transperent-text">Air date</p>
      </div>
      <div class="episod-card_second-construction-div">
        <p class="episod-card_regular-text">4</p>
        <p class="episod-card_regular-text">${e.air_date}</p>
      </div>
    </div>
  </div>`;if(e.episode.includes("S05"))return`<div class="episod-card episod-card-S05" data-episode-id="${d}">
      <h3 class="episod-card_title">${e.name}</h3>
      <div class="episod-card_first-construction-div">
        <p class="episod-card_transperent-text">Season</p>
        <p class="episod-card_transperent-text">Air date</p>
      </div>
      <div class="episod-card_second-construction-div">
        <p class="episod-card_regular-text">5</p>
        <p class="episod-card_regular-text">${e.air_date}</p>
      </div>
    </div>
  </div>`;if(e.episode.includes("S06"))return`<div class="episod-card episod-card-S06" data-episode-id="${d}">
      <h3 class="episod-card_title">${e.name}</h3>
      <div class="episod-card_first-construction-div">
        <p class="episod-card_transperent-text">Season</p>
        <p class="episod-card_transperent-text">Air date</p>
      </div>
      <div class="episod-card_second-construction-div">
        <p class="episod-card_regular-text">6</p>
        <p class="episod-card_regular-text">${e.air_date}</p>
      </div>
    </div>
  </div>`}).join("");l.insertAdjacentHTML("beforeend",t)};b.addEventListener("change",s=>{u=s.currentTarget.value,console.log(s.currentTarget.value),l.innerHTML="",i=50,n=0,h()});M.addEventListener("input",s=>{y=s.currentTarget.value,l.innerHTML="",i=50,n=0,h(),a.style.display="none"});a.addEventListener("click",()=>{m().then(s=>{let t=i*r,e=i*c;if(s.results.length<=t){if(n++,n>3){a.style.display="none";return}r=0,c=1,m().then(d=>{t=i*r,e=i*c,g(d.results.slice(t,e))})}else t=i*r,e=i*c,g(s.results.slice(t,e))}),r++,c++});l.addEventListener("click",s=>{const t=s.target.closest(".episod-card");if(t){console.log("Клікнули на діву:",t);const e=t.dataset.episodeId;console.log(e);const d=f.get(e);k(d)}});const j=document.querySelector(".slider_line"),x=document.querySelectorAll(".slider_img"),v=document.querySelector(".slider_block");function S(){v.offsetWidth,j.style.width=`${v*x.length}px`,x.forEach(s=>{s.style.blockWidth=v+"px",s.style.height="auto"})}S();window.addEventListener("resize",S);
