("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6.register("bAkNG",(function(e,n){const t=document.getElementById("form");t.addEventListener("submit",(function(e){e.preventDefault();let n=e.currentTarget,t=new FormData(n),o=new XMLHttpRequest;console.log(t),o.onreadystatechange=function(){4===o.readyState&&200===o.status&&console.log("Отправлено")},o.open("POST","mail.php",!0),o.send(t),e.currentTarget.reset()})),console.log(t)}));
//# sourceMappingURL=form.ee863ad2.js.map