document.addEventListener("DOMContentLoaded",()=>{const t=new Date;t.month=t.getMonth(),t.year=t.getFullYear(),t.hour=t.getHours();const e=document.getElementsByTagName("body")[0];t.hour>=8&&t.hour<21?e.classList.add("at-day"):e.classList.add("at-night");let n="";n=t.month<10?"-0":"-";const a=`${["January","February","March","April","March","June","July","August","September","October","November","December"][t.month]} ${t.year}`,o=`${t.year}${n}${t.month+1}`,s=document.getElementsByTagName("time")[0];s.setAttribute("datatime",o),s.textContent=a;const r=document.getElementById("pop-up"),d=document.getElementById("pop-up-shadow"),c=t=>{d.setAttribute("class","pop-up-shadow"),(()=>{const t=document.createElement("span"),e=document.createElement("span"),n=document.createElement("span"),a=document.createElement("span"),o=document.createElement("pre"),s=document.createTextNode("pablogarcia.dev");t.setAttribute("class","header-terminal"),e.setAttribute("class","button-terminal-red"),n.setAttribute("class","button-terminal-yellow"),a.setAttribute("class","button-terminal-green"),o.setAttribute("class","terminal-title"),o.appendChild(s),r.appendChild(t),t.appendChild(e),t.appendChild(n),t.appendChild(a),t.appendChild(o)})(),(t=>{const e=document.createElement("div");e.setAttribute("class","body-terminal");const n=document.createElement("p"),a=document.createTextNode("Specialties");n.appendChild(a),n.setAttribute("class","terminal-host"),e.appendChild(n);const o=document.createElement("p");e.appendChild(o),o.setAttribute("class","first-arrow");const s=document.createElement("p"),d=document.createTextNode(t.textContent);e.appendChild(s),s.appendChild(d),s.setAttribute("class","terminal-path");const c=document.createElement("p");e.appendChild(c),c.setAttribute("class","second-arrow");const l=document.createElement("p"),i=document.createTextNode(t.title);e.appendChild(l),l.setAttribute("data-name",t.textContent),l.setAttribute("class","terminal-content cursor-for-last-text"),l.appendChild(i),r.appendChild(e),r.setAttribute("class","pop-up pop-up-active")})(t),e.style.overflow="hidden"};let l=0;document.addEventListener("click",t=>{1===l&&(l=0,d.setAttribute("class",""),r.setAttribute("class","pop-up pop-up-disabled"),r.textContent="",e.removeAttribute("style")),t.target.hasAttribute("title")&&0===l&&(l=1,c(t.target))},!1)}),console.log("HELLO PARTNET\nFeel free to fork it on https://github.com/pablorgarcia/pablorgarcia.github.io\n👋😄");