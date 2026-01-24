import"./main-e729fe9b.js";const j="/rickandmorty/assets/text_logo_gl-92500735.png",q="/rickandmorty/assets/text_logo-77d9c413.png",I="/rickandmorty/assets/text_logo_gl_2x-69e4d6ab.png",C="/rickandmorty/assets/text_logo_2x-2c00488a.png",p=document.querySelector("#header_text_logo_img");p.addEventListener("mouseover",()=>{window.devicePixelRatio>1?p.src=I:p.src=j});p.addEventListener("mouseout",()=>{window.devicePixelRatio>1?p.src=C:p.src=q});function H(s){const t=document.createElement("div");t.className="episodes-modal",t.innerHTML=`<div class="episode_modal">
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
    </div>`,document.body.appendChild(t),s.characters&&s.characters.length>0&&O(s.characters,t),t.querySelector(".episode_modal_close_btn").addEventListener("click",()=>{t.remove()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(console.log("Escape pressed"),t.remove())}),t.addEventListener("click",e=>{e.target===t&&t.remove()})}function O(s,t){const e=t.querySelector(".episode_modal_charactes_list");s.slice(0,4).forEach(i=>{fetch(i).then(d=>d.json()).then(d=>{console.log(d);const a=document.createElement("div");a.className="episode_modal_construction-div",a.innerHTML=`
        <div class="episode_modal_construction-div">
          <img src="${d.image}" class="episode_modal_character_img"></img>
          <span class="episode_modal_name">${d.name}</span>
          </div>
        `,e.appendChild(a)}).catch(d=>console.log("Error loading episode:",d))})}function P(s,t=100,e={}){if(typeof s!="function")throw new TypeError(`Expected the first parameter to be a function, got \`${typeof s}\`.`);if(t<0)throw new RangeError("`wait` must not be negative.");if(typeof e=="boolean")throw new TypeError("The `options` parameter must be an object, not a boolean. Use `{immediate: true}` instead.");const{immediate:i}=e;let d,a,o,b,l;function h(){const c=d,f=a;return d=void 0,a=void 0,l=s.apply(c,f),l}function k(){const c=Date.now()-b;c<t&&c>=0?o=setTimeout(k,t-c):(o=void 0,i||(l=h()))}const n=function(...c){if(d&&this!==d&&Object.getPrototypeOf(this)===Object.getPrototypeOf(d))throw new Error("Debounced method called with different contexts of the same prototype.");d=this,a=c,b=Date.now();const f=i&&!o;if(o||(o=setTimeout(k,t)),f)return l=h(),l};return Object.defineProperty(n,"isPending",{get(){return o!==void 0}}),n.clear=()=>{o&&(clearTimeout(o),o=void 0,d=void 0,a=void 0)},n.flush=()=>{o&&n.trigger()},n.trigger=()=>{l=h(),n.clear()},n}const W="https://rickandmortyapi.com/api/episode",E=document.querySelector("#name_input"),D=document.querySelector("#select"),g=document.querySelector("#episops_list"),_=document.querySelector("#load_more_episodes");let y="",B=0;const M=new Map;let A="",u=0,m=1,v=1;const R=`<div class="ops_position-div">
      <img src="./img/together/oops_mobile_1x.png" alt="зелений портал з якого наполовину вилізли Рік і Морті" srcset="./img/together/oops_mobile_1x.png 284w, ./img/together/oops_mobile_2x.png 568w, ./img/together/oops_tablet_and_desktop_1x.png 388w, ./img/together/oops_tablet_and_desktop_2x.png 776w, 100vw" sizes="(min-width: 768px) 388px, (max-width: 768px) 284px, 100vw" class="ops_img">
      <p class="ops_paragraf">Oops! Try looking for something else...</p>
      </div>`,N=()=>window.innerWidth<1200?10:20;let r=N();const w=()=>(_.style.display="block",y!==""&&(_.style.display="none"),fetch(`${W}?episode=${y}&name=${A}&page=${v}`).then(s=>s.json())),$=s=>{w().then(t=>{try{S(t.results.slice(0,r))}catch{console.log("error"),g.innerHTML=R,_.style.display="none"}})};$();const S=s=>{const t=s.map(e=>{const i=`episod-${B++}`;if(M.set(i,e),e.episode.includes("S01"))return`<div class="episod-card episod-card-S01" data-episode-id="${i}">
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
  </div>`;if(e.episode.includes("S02"))return`<div class="episod-card episod-card-S02" data-episode-id="${i}">
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
  </div>`;if(e.episode.includes("S03"))return`<div class="episod-card episod-card-S03" data-episode-id="${i}">
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
  </div>`;if(e.episode.includes("S04"))return`<div class="episod-card episod-card-S04" data-episode-id="${i}">
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
  </div>`;if(e.episode.includes("S05"))return`<div class="episod-card episod-card-S05" data-episode-id="${i}">
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
  </div>`;if(e.episode.includes("S06"))return`<div class="episod-card episod-card-S06" data-episode-id="${i}">
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
  </div>`}).join("");g.insertAdjacentHTML("beforeend",t)};D.addEventListener("change",s=>{y=s.currentTarget.value,console.log(s.currentTarget.value),g.innerHTML="",r=50,v=0,$()});E.addEventListener("input",P(s=>{A=E.value,g.innerHTML="",r=50,v=0,$(),_.style.display="none"},1e3));_.addEventListener("click",()=>{w().then(s=>{let t=r*u,e=r*m;if(s.results.length<=t){if(v++,v>3){_.style.display="none";return}u=0,m=1,w().then(i=>{t=r*u,e=r*m,S(i.results.slice(t,e))})}else t=r*u,e=r*m,S(s.results.slice(t,e))}),u++,m++});g.addEventListener("click",s=>{const t=s.target.closest(".episod-card");if(t){console.log("Клікнули на діву:",t);const e=t.dataset.episodeId;console.log(e);const i=M.get(e);H(i)}});const U=document.querySelector(".slider_line"),L=document.querySelectorAll(".slider_img"),x=document.querySelector(".slider_block");function T(){x.offsetWidth,U.style.width=`${x*L.length}px`,L.forEach(s=>{s.style.blockWidth=x+"px",s.style.height="auto"})}T();window.addEventListener("resize",T);
