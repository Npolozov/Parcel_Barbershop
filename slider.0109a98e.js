("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6.register("7tzR7",(function(e,t){const l=document.querySelector(".hero-content"),o=document.querySelector(".slider_btn_next"),n=document.querySelector(".slider_btn_prev"),r=["hero-content","hero-content slider_two","hero-content slider_three"];let c=0;!function(){const e=localStorage.getItem("slider");console.log("slider :>> ",e),e&&(c=e,l.className=r[e])}(),o.addEventListener("click",(()=>{c++,c===r.length&&(c=0),console.log(c),l.className=r[c],localStorage.setItem("slider",c)})),n.addEventListener("click",(()=>{if(localStorage.setItem("slider",c),c<=0){c=r.length}c-=1,l.className=r[c],localStorage.setItem("slider",c)}))}));
//# sourceMappingURL=slider.0109a98e.js.map
