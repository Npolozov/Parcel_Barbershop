("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6.register("7tzR7",(function(e,o){const l=document.querySelector(".hero-content"),t=document.querySelector(".slider_btn_next"),n=document.querySelector(".slider_btn_prev"),c=["hero-content","hero-content slider_two","hero-content slider_three"];console.log(c.length);let s=0;!function(){const e=localStorage.getItem("slider");console.log("slider :>> ",e),e&&(s=e,l.className=c[e])}(),t.addEventListener("click",(()=>{s++,s===c.length&&(s=0),console.log(s),l.className=c[s],console.log(l.className),localStorage.setItem("slider",s)})),n.addEventListener("click",(()=>{if(s<=0){s=c.length}s-=1,l.className=c[s],localStorage.setItem("slider",s)}))}));
//# sourceMappingURL=slider.2579ad80.js.map
