// Configuración editable
const CONFIG = {
  slideshowImages: [
    "media/slideshow/slideshow_1.webp",
    "media/slideshow/slideshow_2.webp",
    "media/slideshow/slideshow_3.webp",
    "media/slideshow/slideshow_4.webp",
    "media/slideshow/slideshow_5.webp"
  ],
  slideshowInterval: 8000,
  quotes: [
    "Hace mucho tiempo, en una galaxia muy, muy lejana...",
    "No. No lo intentes. Hazlo, o no lo hagas, pero no lo intentes. - Yoda",
    "Entrénate a ti mismo para dejar ir todo aquello que temes perder. - Yoda",
    "Mira a tu alrededor. Somos uno solo, mismo corazón, misma sangre. Tu entrenamiento está en tu sangre. ¡Y mi sangre hierve por una pelea! - CT-5555 'Fives'",
    "Roger. Roger. - Capitán Rex",
    "Los buenos soldados siguen órdenes.",
    "¡Por la República!"
  ]
};

let slideshow = document.getElementById("slideshow");
let index = 0;
function changeSlide() {
  slideshow.style.opacity = 0;
  setTimeout(() => {
    slideshow.style.backgroundImage = `url(${CONFIG.slideshowImages[index]})`;
    slideshow.style.opacity = 1;
    index = (index + 1) % CONFIG.slideshowImages.length;
  }, 2000);
}
setInterval(changeSlide, CONFIG.slideshowInterval);
changeSlide();

// Frases aleatorias
document.getElementById("quote").innerText =
  CONFIG.quotes[Math.floor(Math.random() * CONFIG.quotes.length)];

// Detectar mapname en la URL (?mapname=rp_venator)
const params = new URLSearchParams(window.location.search);
const map = params.get("mapname");
if (map) {
  document.getElementById("map-name").innerText = `Aterrizando en ${map}...`;
}
