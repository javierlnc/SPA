(()=>{"use strict";const n="https://rickandmortyapi.com/api/character/",a=async a=>{const e=a?`${n}${a}`:n;try{const n=await fetch(e);return await n.json()}catch(n){console.log("fetch Error",n)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",t=()=>'\n    <div class="error404">\n    <h2>Error 404</h2>\n\n    </div>\n    ',c={"/":async()=>`\n    <div class="characters">\n    ${(await a()).results.map((n=>`\n        <article class="character-item">\n            <a href="#/${n.id}/">\n                <img src="${n.image}" alt="${n.name}">\n                <h2>${n.name}</h2>\n            </a>\n         </article>\n    `)).join("")}\n    </div>\n    `,"/:id":async()=>{const n=e(),t=await a(n);return`\n    <div class="Chareacters-Inner">\n        <article class="character-card">\n            <img src="${t.image}" alt="${t.name}">\n            <h2>${t.name}</h2>\n        </article>\n        <article class="character-card">\n            <h3>Episodios: ${t.episode.length}</h3>\n            <h3>Status: ${t.status}</h3>\n            <h3>Especie: ${t.species}</h3>\n            <h3>Genero: ${t.gender}</h3>\n            <h3>Origen: ${t.origin.name}</h3>\n            <h3>Ultima Ubicacion: ${t.location.name}</h3>\n        </article>\n\n\n    </div>\n    `},"/contact":"contac"},i=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await'<div class="main-header">\n        <div class="header-logo">\n            <h1><a href="/">\n                100tifi.co\n            </a></h1>\n        </div>\n        <div class="header-nav">\n            <a href="#/about/">about</a>\n        </div>\n    </div>\n    ';let i=e(),r=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(i);console.log(r);let s=c[r]?c[r]:t;console.log(s),a.innerHTML=await s()};window.addEventListener("load",i),window.addEventListener("hashchange",i)})();