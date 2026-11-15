# Shot Final — página pública en GitHub Pages

Esta es la página provisional de Shot Final mientras se prepara una web y un diseño definitivos. Su principal función es conectar el descubrimiento del logotipo en Google, Google Imágenes o Lens con una presentación de la marca y el portafolio de Pixieset.

## Enlaces públicos

- Entrada histórica: https://edixteracosta-commits.github.io/shot-final-webar/
- Página de Shot Final: https://edixteracosta-commits.github.io/shot-final-webar/shot-final/
- Portafolio: https://shotfinal44.pixieset.com/portafolio/
- Instagram: https://www.instagram.com/somosshot.final/

## Recorrido deseado

1. La persona apunta Google Lens al logotipo de Shot Final y puede descubrir la página o imágenes públicas, si Google las muestra.
2. Abre el resultado de GitHub Pages.
3. La URL histórica raíz dirige a la página pública `/shot-final/`.
4. Allí ve el logotipo y servicios de producción audiovisual musical, y selecciona «Abrir portafolio oficial».
5. El botón abre el portafolio externo alojado en Pixieset. La página también ofrece contacto por Instagram.

**La segunda cámara WebAR se retiró.** La identificación de imágenes queda a cargo de Google Lens, no de una cámara dentro del sitio.

## Indexación

- `/shot-final/` es la URL pública canónica, con `index, follow, max-image-preview:large`.
- La raíz mantiene `noindex, follow` y redirige automáticamente a `/shot-final/`, evitando competir con el resultado principal.
- `sitemap.xml` incluye `/shot-final/` y las dos variantes del logotipo.
- Se conservan `robots.txt`, el archivo y la meta de verificación de Search Console y datos estructurados `Organization`.
- Las URLs originales de los recursos gráficos no se cambian.
- Los datos de contacto no incluyen teléfono hasta que sea confirmado como número público de la marca.

## Despliegue

El workflow `.github/workflows/deploy.yml` publica HTML, robots, sitemap, verificación y dos imágenes del logotipo mediante GitHub Pages. Las imágenes se restauran a partir de los archivos base64 ya existentes en el repositorio. No se instala MindAR ni se compilan marcadores de realidad aumentada.

Los antiguos scripts/archivos de WebAR pueden permanecer en el repositorio como material histórico, pero no se publican como experiencia navegable ni intervienen en el despliegue.

**Nota:** SEO y datos estructurados pueden facilitar que Google entienda la marca, pero no garantizan su aparición en Lens, Google Imágenes o respuestas de IA ni una posición específica.

El usuario enviará un diseño visual nuevo en el futuro. Hasta entonces, la página se mantiene provisional para preservar la identidad que Google ya ha empezado a mostrar.
