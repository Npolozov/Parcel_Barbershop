("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6.register("aDOUL",(function(e,o){var t=document.querySelector(".js-scroll-off"),n=document.querySelector(".js-scroll-on");document.body,t.addEventListener("click",(function(e){var o;o=window.scrollY,document.body.classList.add("disable-scroll"),document.body.dataset.position=o,document.body.style.top=-o+"px",e.currentTarget.style.pointerEvents="none",n.style.pointerEvents="auto"})),n.addEventListener("click",(function(e){var o;o=parseInt(document.body.dataset.position,10),document.body.style.top="auto",document.body.classList.remove("disable-scroll"),window.scroll({top:o,left:0}),document.body.removeAttribute("data-position"),e.currentTarget.style.pointerEvents="none",t.style.pointerEvents="auto"}))}));
//# sourceMappingURL=skroll-off.4cdeb017.js.map
