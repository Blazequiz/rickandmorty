/* empty css             */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u="https://rickandmortyapi.com/api/character";async function d(o,n,r,s){try{const e=await fetch(`${u}?name=${o}`);return console.log(e),await e.json()}catch(e){console.log(e)}}const a=document.querySelector("#loadWentWrong"),i=document.querySelector("#characters-filter"),l=document.querySelector("#charactersList");function m(){const o=window.innerWidth;return o<768?8:o<1024?10:20}async function f(o){const n=i.value.trim();document.querySelector("#selectStatus").value,document.querySelector("#selectGender").value,document.querySelector("#selectSpecies").value;const r=m();console.log(r),a.style.display="none",l.innerHTML="",d(n).then(s=>{console.log(s);const e=s.results.slice(0,r);console.log(e),p(e)}).catch(s=>{console.log(s),a.style.display="block"}),i.value=""}function p(o){const n=o.map(r=>`
      <li class="characters-list-item">
        <div class="img-container">
          <img src="${r.image}" alt="${r.name}">
        </div>
        <h3 class="characters-list-item-title">
          ${r.name}
        </h3>
        <div class="characters-list-item-information">
          <div>
            <p><span class="characters-list-item-information-decoration">Origin:</span>  ${r.location.name}</p>
          </div>
          <div>
            <p><span class="characters-list-item-information-decoration">Origin:</span> ${r.origin.name}</p>
          </div>
        </div>
      </li>    
    `).join("");console.log(n),l.insertAdjacentHTML("beforeend",n)}i.addEventListener("change",f);
