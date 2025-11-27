import{a as d,S as p,i as u}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const m="53410313-8865f85a69864d0c0c63fb400",y="https://pixabay.com/api/";async function h(n){const o=new URLSearchParams({key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${y}?${o}`;try{return(await d.get(e)).data}catch(s){throw s}}const i=document.querySelector(".gallery"),a=document.querySelector(".loader");let l;i&&(l=new p(".gallery a",{captionsData:"alt",captionDelay:250}));function g(){a&&a.removeAttribute("hidden")}function b(){a&&a.setAttribute("hidden",!0)}function L(n){if(!i)return;const o=n.map(e=>`
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
        `).join("");i.insertAdjacentHTML("beforeend",o),l&&l.refresh()}function w(){i&&(i.innerHTML="")}const f=document.querySelector(".form");document.querySelector(".gallery");async function S(n){n.preventDefault();const o=n.currentTarget.elements["search-text"].value.trim();if(o!==""){w(),g(),n.currentTarget.reset();try{const e=await h(o);e.hits.length===0?u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(e.hits)}catch(e){console.error(e),u.error({title:"Error",message:"Failed to fetch images. Please check your network or API key.",position:"topRight"})}finally{b()}}}f&&f.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
