# Shot Final WebAR

Proyecto WebAR para reconocer visualmente el logo original de **Shot Final** y mostrar un acceso directo al portafolio:

https://shotfinal44.pixieset.com/portafolio/

## Qué hace

1. El visitante abre la página en Chrome o Safari.
2. Toca **Activar cámara**.
3. Apunta al logo original de Shot Final.
4. MindAR reconoce el logo.
5. Aparece el botón **Ver portafolio**.
6. El botón abre Pixieset.

No hay QR visible y el visitante no instala ninguna app.

## Tecnología

- MindAR 1.2.5
- A-Frame 1.6.0
- GitHub Pages
- GitHub Actions para compilar automáticamente el marcador visual `.mind`

## Archivo objetivo

`assets/target.b64` contiene una imagen PNG codificada en Base64: el logo blanco de Shot Final sobre fondo oscuro.

El workflow restaura ese PNG y genera `assets/targets.mind` durante el despliegue. Así el repositorio puede mantenerse completamente en archivos de texto.

## Publicación

El workflow `.github/workflows/deploy.yml` compila y publica automáticamente.

Si GitHub Pages no está habilitado todavía:

1. Abre el repositorio.
2. **Settings → Pages**.
3. En **Build and deployment / Source**, selecciona **GitHub Actions**.
4. Abre la pestaña **Actions** y ejecuta `Build and deploy Shot Final WebAR` si no se inició automáticamente.

La URL esperada, una vez activo Pages, será:

`https://edixteracosta-commits.github.io/shot-final-webar/`

## Importante para el reconocimiento

La imagen física debe parecerse al objetivo compilado:

- logo blanco;
- fondo oscuro/negro;
- mostrar el logo completo;
- evitar reflejos muy fuertes;
- para una tarjeta, conviene que el logo tenga al menos unos 5–7 cm de alto durante las primeras pruebas.

Si luego se usará otra versión del logo (por ejemplo negro sobre blanco), se puede agregar como segundo objetivo.
