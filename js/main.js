/* Cursor Glow */
document.addEventListener("mousemove", e=>{
  const glow=document.querySelector(".cursor-glow");
  glow.style.left=e.clientX+"px";
  glow.style.top=e.clientY+"px";
});

/* Terminal */
const lines=[
"Inicializando portafolio...",
"Acceso concedido.",
"Juan Esteban Alfonso — Desarrollador Full Stack",
"Arquitectura backend • Sistemas seguros • Plataformas escalables",
"Proyecto principal: StarHotelHub.com"
];

const output=document.getElementById("terminal-output");
let i=0;

function printLine(){
  if(i<lines.length){
    const div=document.createElement("div");
    div.textContent=lines[i];
    output.appendChild(div);
    i++;
    setTimeout(printLine,600);
  }
}
printLine();

/* Skills dinámicas */
const skills=[
{label:"PHP",level:10},
{label:"MySQL",level:9},
{label:"JavaScript",level:8},
{label:"Python",level:7}
];

const container=document.getElementById("skills-container");

skills.forEach(skill=>{
  let bar="█".repeat(skill.level)+"░".repeat(10-skill.level);
  let div=document.createElement("div");
  div.textContent=bar+" "+skill.label;
  container.appendChild(div);
});

/* Scroll progress */
window.addEventListener("scroll",()=>{
  let winScroll=document.documentElement.scrollTop;
  let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
  document.getElementById("progress").style.width=(winScroll/height*100)+"%";
});

/* Reveal */
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));