import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as r}from"./assets/vendor-ceb9b81e.js";const m=document.querySelector(".form");m.addEventListener("submit",e=>{e.preventDefault();const s=+m.elements.delay.value,t=m.elements.state.value=="fulfilled";c(s,t).then(i=>{r.success({message:`✅ Fulfilled promise in ${i}ms`})}).catch(i=>{r.error({message:`❌ Rejected promise in ${i}ms`})})});function c(e,s){return new Promise((o,t)=>{setTimeout(()=>{s?o(e):t(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
