import"./modulepreload-polyfill-3cfb730f.js";/* empty css             */const t=document.querySelector("#header_text_logo_img"),c="./img/together/text_logo.png",a="./img/together/text_logo_gl.png";t.addEventListener("mouseover",()=>{t.src=a});t.addEventListener("mouseout",()=>{t.src=c});const l="https://rickandmortyapi.com/api/episode";document.querySelector("#name_input");const p=document.querySelector("#select"),u=document.querySelector("#episops_list");let m="",g=0;const _=new Map,h=()=>fetch(`${l}?episode=${m}`).then(e=>e.json());h().then(e=>{e.results.map(s=>{console.log(s)})});const v=e=>{const s=e.map(i=>{const r=`episod-${g++}`;return _.set(r,i),`<div class="episod-card" data-episode-id="${r}">
      <h3 class="episod-card_title">${i.name}</h3>
      <div class="episod-card_first-construction-div">
        <p class="episod-card_transperent-text">Season</p>
        <p class="episod-card_transperent-text">Air date</p>
      </div>
      <div class="episod-card_second-construction-div">
        <p class="episod-card_regular-text">1</p>
        <p class="episod-card_regular-text">${air_date}</p>
      </div>
    </div>
  </div>`}).join("");u.insertAdjacentElement("beforeend",s)};p.addEventListener("change",v);const y=document.querySelector(".slider_line"),d=document.querySelectorAll(".slider_img"),o=document.querySelector(".slider_block");function n(){o.offsetWidth,y.style.width=`${o*d.length}px`,d.forEach(e=>{e.style.blockWidth=o+"px",e.style.height="auto"})}n();window.addEventListener("resize",n);
