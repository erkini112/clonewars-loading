# Pantalla de carga GMod - Template
Estructura mínima para `sv_loadingurl` con vídeo de fondo (webm), slideshow y barra de progreso real.

## Archivos
- `index.html` — maquetación principal
- `style.css` — estilos con efecto glass
- `script.js` — lógica de progreso (usa funciones que GMod invoca), slideshow y frases
- `media/planeta_zoom.webm` — (añádelo tú) vídeo de planeta estilo Battlefront
- `media/bg_fallback.jpg` — fallback si no hay vídeo
- `media/slideshow/*.png` — imágenes que rotan

## Cómo usar
1) Sube todos los archivos a un hosting HTTPS (GitHub Pages/Netlify u otro).
2) En `server.cfg` añade, por ejemplo:
   sv_loadingurl "https://TU_DOMINIO/loads/index.html?mapname=%m&steamid=%s"
3) Cambia imágenes en `media/slideshow` y reemplaza `media/planeta_zoom.webm` por tu vídeo.

## Codificar el vídeo (ejemplo ffmpeg)
ffmpeg -y -i input.mp4 -c:v libvpx-vp9 -b:v 0 -crf 32 -an -tile-columns 2 -frame-parallel 1 media/planeta_zoom.webm

## Notas
- La barra de progreso se actualiza cuando el juego empieza a descargar/workshop.
- En navegador normal se simulan eventos para que puedas previsualizar el diseño.
