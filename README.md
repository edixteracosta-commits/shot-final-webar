# Shot Final WebAR

Proyecto WebAR para reconocer visualmente el logo original de **Shot Final** y mostrar un acceso directo al portafolio:

https://shotfinal44.pixieset.com/portafolio/

## Arquitectura

- `/` es la herramienta WebAR y se mantiene en `noindex, follow` para no competir con la página pública de identidad.
- `/shot-final/` es la página pública e indexable que identifica la marca, el logotipo y el portafolio oficial.
- `sitemap.xml` declara la página pública y sus imágenes de identidad.

## Qué hace el WebAR

1. El visitante abre la página en Chrome o Safari.
2. Toca **Activar cámara**.
3. Apunta al logo original de Shot Final.
4. MindAR reconoce una de las dos representaciones compiladas del mismo logotipo.
5. Aparece el botón **Ver portafolio**.
6. El botón abre Pixieset.

No hay QR visible y el visitante no instala ninguna app.

## Tecnología

- MindAR 1.2.5
- A-Frame 1.6.0
- GitHub Pages
- GitHub Actions para compilar automáticamente el marcador visual `.mind`

## Objetivos visuales

- `assets/target-real.b64` reconstruye el logotipo real y se compila como `targetIndex: 0`.
- `assets/target.b64` reconstruye la versión de alto contraste; el compilador genera su versión de impresión y la compila como `targetIndex: 1`.
- La interfaz WebAR escucha ambos índices y ejecuta la misma acción cuando cualquiera es reconocido.

El workflow reconstruye las imágenes, genera `assets/targets.mind` y publica los archivos necesarios durante el despliegue.

## Publicación y validación

El workflow `.github/workflows/deploy.yml` compila, valida y publica automáticamente. Antes de desplegar comprueba, entre otras cosas, que:

- `targets.mind` exista y no esté vacío;
- ambos `targetIndex` estén declarados;
- la raíz siga en `noindex` y `/shot-final/` siga indexable;
- los enlaces al portafolio oficial permanezcan presentes;
- sitemap, robots y archivo de verificación de Google se publiquen.

La URL del proyecto es:

`https://edixteracosta-commits.github.io/shot-final-webar/`

La identidad pública vive en:

`https://edixteracosta-commits.github.io/shot-final-webar/shot-final/`

## Importante para el reconocimiento

La imagen física debe parecerse a alguno de los objetivos compilados:

- mostrar el logo completo;
- evitar reflejos muy fuertes;
- conservar buen contraste;
- para una tarjeta, conviene que el logo tenga al menos unos 5–7 cm de alto durante las primeras pruebas.
