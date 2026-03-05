const textLines = [
  "guest@portfolio:~$ sudo systemctl",
  "Initializing portfolio...",
  "Access granted.",
  "Juan Esteban Alfonso — Full Stack Developer",
  "Building secure and scalable systems."
];

let i = 0;
let j = 0;
const typing = document.getElementById("typing");

function type() {
  if (i < textLines.length) {
    if (j < textLines[i].length) {
      typing.innerHTML += textLines[i].charAt(j);
      j++;
      setTimeout(type, 25);
    } else {
      typing.innerHTML += "<br>";
      i++;
      j = 0;
      setTimeout(type, 400);
    }
  } else {
    typing.innerHTML += '<span class="blink">█</span>';
  }
}

type();

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const percent = (scrollTop / height) * 100;
  document.querySelector(".scroll-line").style.width = percent + "%";
});