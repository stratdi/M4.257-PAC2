!function(){/**
 * Configura la pàgina amb el tema indicat.
 * @param {*} theme 
 * @param {*} save 
 */function e(e,t){var n=document.documentElement,c="osdefault"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;n.dataset.theme=c,t&&localStorage.setItem("ring-theme",c)}document.addEventListener("DOMContentLoaded",function(){var t,n,c,r;t=document.querySelector("#theme-light"),n=document.querySelector("#theme-dark"),c=document.querySelector("#theme-osdefault"),t.addEventListener("click",function(){return e("light",!0)}),n.addEventListener("click",function(){return e("dark",!0)}),c.addEventListener("click",function(){return e("osdefault",!0)}),(r=localStorage.getItem("ring-theme"))?(e(r,!1),document.querySelector("#theme-".concat(r,"-radio")).checked=!0):e("osdefault",!1),// Inicialització del plugin feather
feather.replace()})}();//# sourceMappingURL=index.d7361c7c.js.map

//# sourceMappingURL=index.d7361c7c.js.map
