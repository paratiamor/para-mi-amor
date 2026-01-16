const fechaCorrecta = "2005-01-19";

function verificarFecha() {
  const fecha = document.getElementById("fecha").value;
  const error = document.getElementById("error");

  if (fecha === fechaCorrecta) {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("contenido").style.display = "block";
    iniciarCorazones();
  } else {
    error.textContent = "Esa fecha no es correcta 😅";
  }
}

function mostrarRecuerdos() {
  document.getElementById("tituloRecuerdos").style.display = "block";
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

/* Animación fotos */
const fotos = document.querySelectorAll(".foto");
window.addEventListener("scroll", () => {
  fotos.forEach(foto => {
    if (foto.getBoundingClientRect().top < window.innerHeight - 80) {
      foto.classList.add("visible");
    }
  });
});

/* ❤️ Corazones flotando */
function iniciarCorazones() {
  setInterval(() => {
    const c = document.createElement("span");
    c.innerHTML = "❤️";
    c.style.left = Math.random() * 70 + 15 + "vw";
    c.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.querySelector(".corazones").appendChild(c);
    setTimeout(() => c.remove(), 7000);
  }, 500);
}

/* ❤️ Corazones mouse */
document.addEventListener("mousemove", e => {
  const h = document.createElement("span");
  h.innerHTML = "❤️";
  h.style.left = e.clientX + "px";
  h.style.top = e.clientY + "px";
  document.querySelector(".mouse-hearts").appendChild(h);
  setTimeout(() => h.remove(), 1000);
});

/* 🌸 Pétalos */
setInterval(() => {
  const p = document.createElement("span");
  p.innerHTML = "🌸";
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 6 + Math.random() * 5 + "s";
  document.querySelector(".petalos").appendChild(p);
  setTimeout(() => p.remove(), 12000);
}, 600);
