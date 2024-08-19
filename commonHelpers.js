import{S as u,i as n}from"./assets/vendor-403a0c46.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const m=t=>` 
  <li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img
        class="gallery-image"
        src="${t.webformatURL}"
        alt="${t.tags}"
      />
    </a>
    <div class="img-details">
      <p class="detail-item"><b>Likes:</b> ${t.likes}</p>
      <p class="detail-item"><b>Views:</b> ${t.views}</p>
      <p class="detail-item"><b>Comments:</b> ${t.comments}</p>
      <p class="detail-item"><b>Downloads:</b> ${t.downloads}</p>
    </div>
  </li>`,p=()=>{new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()},h="https://pixabay.com/api/",f=t=>{const o=new URLSearchParams({key:"45497823-3ee11a5b90ff874601dfe7178",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:18});return fetch(`${h}?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},l=document.querySelector(".js-page-form"),c=document.querySelector(".js-gallery"),d=document.querySelector(".js-loader"),g=()=>{d.classList.remove("is-hidden")},y=()=>{d.classList.add("is-hidden")},b=t=>{t.preventDefault();const o=l.elements.user_query.value;g(),f(o).then(r=>{if(r.hits&&r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",l.reset();return}const a=r.hits.map(e=>m(e)).join("");c.innerHTML=a,p()}).catch(r=>{console.log(r),n.error({message:"Something went wrong. Please try again!",position:"topRight"})}).finally(()=>{y()})};l.addEventListener("submit",b);
//# sourceMappingURL=commonHelpers.js.map
