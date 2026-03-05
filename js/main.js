/* Typing Effect */
const text = `Initializing portfolio...
Access granted.
Juan Esteban Alfonso — Full Stack Developer
Building secure and scalable systems.`;

let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
typeWriter();

/* Scroll Progress */
window.addEventListener("scroll", () => {
  let winScroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress").style.width = scrolled + "%";
});