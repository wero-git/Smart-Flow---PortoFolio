console.log("SmartFlow Portfolio Loaded");

window.addEventListener("scroll", ()=>{const nav=document.querySelector("nav"); nav.classList.toggle("sticky", window.scrollY>50);});
