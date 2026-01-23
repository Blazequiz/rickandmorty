import"./modulepreload-polyfill-3cfb730f.js";/* empty css             */const n=document.querySelector("#header_text_logo_img"),S="./img/together/text_logo.png",y="./img/together/text_logo_gl.png";n.addEventListener("mouseover",()=>{n.src=y});n.addEventListener("mouseout",()=>{n.src=S});const f="https://rickandmortyapi.com/api/episode",$=document.querySelector("#name_input"),w=document.querySelector("#select"),p=document.querySelector("#episops_list"),r=document.querySelector("#load_more_episodes");let u="",L=0,h="",a=0,o=1,c=1;const E=`<div class="ops_position-div">
      <img src="./img/together/oops_mobile_1x.png" alt="зелений портал з якого наполовину вилізли Рік і Морті" srcset="./img/together/oops_mobile_1x.png 284w, ./img/together/oops_mobile_2x.png 568w, ./img/together/oops_tablet_and_desktop_1x.png 388w, ./img/together/oops_tablet_and_desktop_2x.png 776w, 100vw" sizes="(min-width: 768px) 388px, (max-width: 768px) 284px, 100vw" class="ops_img">
      <p class="ops_paragraf">Oops! Try looking for something else...</p>
      </div>`,b=()=>window.innerWidth<1200?10:20;let i=b();const _=()=>(r.style.display="block",u!==""&&(r.style.display="none"),fetch(`${f}?episode=${u}&name=${h}&page=${c}`).then(s=>s.json())),g=s=>{_().then(t=>{try{v(t.results.slice(0,i))}catch{console.log("error"),p.innerHTML=E,r.style.display="none"}})};g();const v=s=>{const t=s.map(e=>{const d=`episod-${L++}`;if(e.episode.includes("S01"))return`<div class="episod-card episod-card-S01" data-episode-id="${d}">
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
  </div>`}).join("");p.insertAdjacentHTML("beforeend",t)};w.addEventListener("change",s=>{u=s.currentTarget.value,console.log(s.currentTarget.value),p.innerHTML="",i=50,c=0,g()});$.addEventListener("input",s=>{h=s.currentTarget.value,p.innerHTML="",i=50,c=0,g(),r.style.display="none"});r.addEventListener("click",()=>{_().then(s=>{let t=i*a,e=i*o;if(s.results.length<=t){if(c++,c>3){r.style.display="none";return}a=0,o=1,_().then(d=>{t=i*a,e=i*o,v(d.results.slice(t,e))})}else t=i*a,e=i*o,v(s.results.slice(t,e))}),a++,o++});const k=document.querySelector(".slider_line"),m=document.querySelectorAll(".slider_img"),l=document.querySelector(".slider_block");function x(){l.offsetWidth,k.style.width=`${l*m.length}px`,m.forEach(s=>{s.style.blockWidth=l+"px",s.style.height="auto"})}x();window.addEventListener("resize",x);
