import{S as d,i as u}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const p="53410313-8865f85a69864d0c0c63fb400",m="https://pixabay.com/api/";async function y(n){const o=new URLSearchParams({key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${m}?${o}`,i=await fetch(e);if(!i.ok)throw new Error(`HTTP error! Status: ${i.status}`);return await i.json()}const s=document.querySelector(".gallery"),a=document.querySelector(".loader");let l;s&&(l=new d(".gallery a",{captionsData:"alt",captionDelay:250}));function h(){a&&a.removeAttribute("hidden")}function g(){a&&a.setAttribute("hidden",!0)}function b(n){if(!s)return;const o=n.map(e=>`
            <li class="gallery-item">
                <a href="${e.largeImageURL}">
                    <img src="${e.webformatURL}" alt="${e.tags}">
                </a>
                <div class="info">
                    <p><b>Likes</b> ${e.likes}</p>
                    <p><b>Views</b> ${e.views}</p>
                    <p><b>Comments</b> ${e.comments}</p>
                    <p><b>Downloads</b> ${e.downloads}</p>
                </div>
            </li>
        `).join("");s.insertAdjacentHTML("beforeend",o),l&&l.refresh()}function L(){s&&(s.innerHTML="")}const f=document.querySelector(".form");document.querySelector(".gallery");async function w(n){n.preventDefault();const o=n.currentTarget.elements["search-text"].value.trim();if(o!==""){L(),h(),n.currentTarget.reset();try{const e=await y(o);e.hits.length===0?u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):b(e.hits)}catch(e){console.error(e),u.error({title:"Error",message:"Failed to fetch images. Please check your network or API key.",position:"topRight"})}finally{g()}}}f&&f.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
