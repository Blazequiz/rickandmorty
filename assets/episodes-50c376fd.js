import"./modulepreload-polyfill-3cfb730f.js";/* empty css             */const d=document.querySelector("#header_text_logo_img"),u="./img/together/text_logo.png",v="./img/together/text_logo_gl.png";d.addEventListener("mouseover",()=>{d.src=v});d.addEventListener("mouseout",()=>{d.src=u});const _="https://rickandmortyapi.com/api/episode",g=document.querySelector("#name_input"),m=document.querySelector("#select"),a=document.querySelector("#episops_list");let n="",h=0,l="";const x=()=>window.innerWidth<1200?10:20;let S=x();const $=()=>fetch(`${_}?episode=${n}&name=${l}`).then(s=>s.json()),c=s=>{$().then(i=>{f(i.results.slice(0,S))})};c();const f=s=>{const i=s.map(e=>{const t=`episod-${h++}`;if(e.episode.includes("S01"))return console.log(1),`<div class="episod-card episod-card-S01" data-episode-id="${t}">
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
  </div>`;if(e.episode.includes("S02"))return console.log("else 2"),`<div class="episod-card episod-card-S02" data-episode-id="${t}">
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
  </div>`;if(e.episode.includes("S03"))return console.log("else 3"),`<div class="episod-card episod-card-S03" data-episode-id="${t}">
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
  </div>`;if(e.episode.includes("S04"))return console.log("else 4"),`<div class="episod-card episod-card-S04" data-episode-id="${t}">
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
  </div>`;if(e.episode.includes("S05"))return console.log("else 5"),`<div class="episod-card episod-card-S05" data-episode-id="${t}">
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
  </div>`;if(e.episode.includes("S06"))return console.log("else 6"),`<div class="episod-card episod-card-S06" data-episode-id="${t}">
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
  </div>`}).join("");a.insertAdjacentHTML("beforeend",i)};m.addEventListener("change",s=>{n=s.currentTarget.value,a.innerHTML="",c()});g.addEventListener("input",s=>{l=s.currentTarget.value,a.innerHTML="",c()});const y=document.querySelector(".slider_line"),o=document.querySelectorAll(".slider_img"),r=document.querySelector(".slider_block");function p(){r.offsetWidth,y.style.width=`${r*o.length}px`,o.forEach(s=>{s.style.blockWidth=r+"px",s.style.height="auto"})}p();window.addEventListener("resize",p);
