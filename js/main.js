/* Cursor Glow */
document.addEventListener("mousemove", e=>{
  const glow=document.querySelector(".cursor-glow");
  glow.style.left=e.clientX+"px";
  glow.style.top=e.clientY+"px";
});

/* Terminal Animation */
const lines=[
"Initializing portfolio...",
"Access granted.",
"Juan Esteban Alfonso — Full Stack Developer",
"Building secure and scalable systems."
];

const output=document.getElementById("terminal-output");

let lineIndex=0;
function printLine(){
  if(lineIndex<lines.length){
    const div=document.createElement("div");
    div.textContent=lines[lineIndex];
    output.appendChild(div);
    lineIndex++;
    setTimeout(printLine,600);
  }
}
printLine();

/* Stack animation */
const stackText=`
> stack --list
Frontend: HTML5, CSS3, JavaScript
Backend: PHP, MySQL, Python
Tools: Git, REST APIs, Chart.js, Linux
`;

document.querySelector(".stack-output").textContent=stackText;

/* Skills Animation */
const skills=[
{label:"PHP",level:10},
{label:"MySQL",level:9},
{label:"JavaScript",level:8},
{label:"Python",level:7}
];

const skillsContainer=document.getElementById("skills-container");

skills.forEach(skill=>{
  let bar="█".repeat(skill.level)+"░".repeat(10-skill.level);
  let div=document.createElement("div");
  div.textContent=bar+" "+skill.label;
  skillsContainer.appendChild(div);
});

/* Scroll Progress */
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