import{i as c}from"./assets/vendor-e9539ef2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=o=>` <li class="gallery-item">
  <a class="gallery-link" href="${o.webformatURL}">
    <img
      class="gallery-image"
      src="${o.webformatURL}"
      alt="${o.tags}"

    />
  </a>
</li>`,f="https://pixabay.com/api/",m=o=>{const s=new URLSearchParams({key:"45497823-3ee11a5b90ff874601dfe7178",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${f}?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},l=document.querySelector(".js-page-form"),i=document.querySelector(".js-gallery"),d=o=>{o.preventDefault();const s=l.elements.user_query.value;m(s).then(r=>{if(r.hits.length===0){c.error({message:"За вашим запитом, зображень не знайдено!",position:"topRight"}),i.innerHTML="",l.reset();return}const n=r.hits.map(e=>u(e)).join("");i.innerHTML=n}).catch(r=>{console.log(r)})};l.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers.js.map
