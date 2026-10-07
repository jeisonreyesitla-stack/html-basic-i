# Ejercicio 5: Rutas de archivos e imágenes en HTML

## 🚀 Ver tus ejercicios en tiempo real con Live Server

Para visualizar tus archivos HTML en el navegador mientras trabajas:

1. **Instala Live Server:** Ve a Extensiones en VS Code (Ctrl+Shift+X) y busca "Live Server" por Ritwick Dey
2. **Abre tu archivo HTML** y haz clic derecho → **"Open with Live Server"** o clic en **"Go Live"** en la barra inferior
3. **Los cambios se reflejarán automáticamente** en tu navegador al guardar

---

## Objetivo

El objetivo de este ejercicio es aprender a manejar rutas de archivos en HTML, especialmente para imágenes, aplicando buenas prácticas en la organización de archivos web.

## 🎯 Conceptos a evalúar:

   - Manejo de rutas relativas vs absolutas .
   - Organización de archivos multimedia.
   - Accesibilidad web (atributo alt).
   - Buenas prácticas en nomenclatura de archivos.
   - Estructura semántica HTML.

### Documentación
[Material didáctico.](https://webtecnodidacticahoy.web.app/html/Manejo_de_archivos/rutas_de_archivo.html)

## Instrucciones

1. Este ejercicio se creará dentro de la carpeta `src/ejercicio-1`.

2. Crear una carpeta llamada `images` dentro de `src/ejercicio-1/` para organizar las imágenes.

3. Crear un archivo `galeria.html` ubicado en la carpeta `src/ejercicio-1`.

4. Agregar los siguientes elementos a tu documento HTML:
   - Un encabezado principal de nivel uno "Galería de Imágenes".
   - Un párrafo descriptivo explicando el contenido de la galería.
   - Al menos **dos imágenes** que demuestren el uso de rutas relativas:
     - Una imagen usando ruta relativa simple: `images/nombre-imagen.jpg`
     - Una imagen usando ruta relativa con `./`: `./images/nombre-imagen.png`

5. **Requisitos para las imágenes**:
   - Todas las imágenes deben tener el atributo `alt` con texto descriptivo.
   - Las rutas deben ser relativas (no absolutas).
   - Los nombres de archivo no deben contener espacios. 
   - Usar extensiones web estándar: `.jpg`, `.png`, `.gif`, `.webp`, `.svg`.

6. **Estructura de carpetas esperada**:
   ```
   src/ejercicio-1/
   ├── galeria.html
   ├── images/
   │   ├── imagen1.jpg
   │   └── imagen2.png
   ```

7. **Buenas prácticas a aplicar**:
   - Usar nombres de archivo descriptivos y sin espacios.
   - Organizar imágenes en carpeta separada.
   - Siempre incluir atributo `alt` para accesibilidad.
   - Usar rutas relativas para portabilidad.

8. Guarda tus cambios y asegúrate de que las imágenes se muestren correctamente.

## Entrega  

Una vez que hayas completado el ejercicio ejecuta:
```bash
npm test tests/ejercicio/5-rutas-imagenes.test.js
```

Si pasa todos los tests, haz commit de tus cambios y súbelos a tu repositorio de GitHub. Asegúrate de probar tu página HTML en un navegador web para verificar que todas las imágenes se muestren correctamente.

## Conceptos clave

- **Rutas relativas**: Rutas que se definen en relación a la ubicación del archivo HTML
- **Rutas absolutas**: Rutas completas desde la raíz del sistema (no recomendadas para web)
- **Atributo alt**: Texto alternativo para accesibilidad y SEO
- **Organización de archivos**: Separar imágenes en carpetas específicas

¡Buena suerte y diviértete programando!
