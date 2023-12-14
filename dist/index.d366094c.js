/**
 * Configura la pàgina amb el tema indicat.
 * @param {*} theme 
 * @param {*} save 
 */function e(e,t){let c=document.documentElement,d="osdefault"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c.dataset.theme=d,t&&localStorage.setItem("ring-theme",d)}document.addEventListener("DOMContentLoaded",function(){!function(){let t=document.querySelector("#theme-light"),c=document.querySelector("#theme-dark"),d=document.querySelector("#theme-osdefault");t.addEventListener("click",()=>e("light",!0)),c.addEventListener("click",()=>e("dark",!0)),d.addEventListener("click",()=>e("osdefault",!0)),/**
 * Inicialitza el tema de la pàgina. Mira si l'usuari ha seleccionat cap opció prèviament del localStorage. Si no, per defecte mira la config del SO.
 */function(){let t=localStorage.getItem("ring-theme");t?(e(t,!1),document.querySelector(`#theme-${t}-radio`).checked=!0):e("osdefault",!1)}()}(),// Inicialització del plugin feather
feather.replace()});//# sourceMappingURL=index.d366094c.js.map

//# sourceMappingURL=index.d366094c.js.map
