import{S as u}from"./assets/vendor-Dt1Lz-pX.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();var l=new u(".swiper",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar",draggable:!0},slidesPerView:2,spaceBetween:10,breakpoints:{768:{slidesPerView:2,spaceBetween:15},1024:{slidesPerView:3,spaceBetween:20,mousewheel:{forceToAxis:!0}},1440:{slidesPerView:4,spaceBetween:30,mousewheel:{forceToAxis:!0}}}});const p=document.querySelector(".swiper");p.addEventListener("wheel",o=>{o.preventDefault(),o.deltaY>0?l.slideNext():l.slidePrev()},{passive:!1});const a=document.querySelector(".modal-window"),f=document.querySelector(".burger-btn"),m=document.querySelector(".closed-button"),d=document.querySelector("body");f.addEventListener("click",()=>{a.classList.add("is-open"),d.classList.add("body-lock")});m.addEventListener("click",()=>{a.classList.remove("is-open"),d.classList.remove("body-lock")});const c=document.querySelector(".entry-form");c.addEventListener("submit",w);function w(o){o.preventDefault();const r=new FormData(c),i=r.get("client-name"),s=r.get("client-phone"),e=r.get("date"),t=r.get("comments");console.log([i,s,e,t]),c.reset()}
//# sourceMappingURL=index.js.map
