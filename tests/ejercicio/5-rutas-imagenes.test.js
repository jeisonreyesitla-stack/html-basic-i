const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 5: Rutas de archivos e imágenes', () => {
  const rootPath = path.join(__dirname, '../../');
  const filePath = path.join(rootPath, 'src', 'ejercicio-1', 'galeria.html');
  const imgPath = path.join(rootPath, 'src', 'ejercicio-1', 'images');
  
  test('La carpeta src/ejercicio-1 debe existir', () => {
    const srcPath = path.join(rootPath, 'src/ejercicio-1');    
    expect(fs.existsSync(srcPath)).toBe(true);    
    const stats = fs.statSync(srcPath);
    expect(stats.isDirectory()).toBe(true);
  });

  test('La carpeta src/ejercicio-1/images debe existir', () => {   
    expect(fs.existsSync(imgPath)).toBe(true);    
    const stats = fs.statSync(imgPath);
    expect(stats.isDirectory()).toBe(true);
  });
  
  test('El archivo src/ejercicio-1/galeria.html debe existir', () => {    
    expect(fs.existsSync(filePath)).toBe(true);        
    const stats = fs.statSync(filePath);
    expect(stats.isFile()).toBe(true);
  });

  test('El archivo galeria.html debe tener estructura HTML básica', () => {      
    expect(fs.existsSync(filePath)).toBe(true);     
    const content = fs.readFileSync(filePath, 'utf8');
      
    expect(content).toMatch(/<!DOCTYPE\s+html>/i);
    expect(content).toMatch(/<html[^>]*>/i);
    expect(content).toMatch(/<head[^>]*>/i);
    expect(content).toMatch(/<\/head>/i);
    expect(content).toMatch(/<body[^>]*>/i);
    expect(content).toMatch(/<\/body>/i);
    expect(content).toMatch(/<\/html>/i);
  });

  test('El archivo galeria.html debe tener título', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    expect(content).toMatch(/<title[^>]*>.*<\/title>/i);     
  });

  test('galeria.html debe contener al menos una imagen con ruta relativa', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const images = document.querySelectorAll('img');
    
    expect(images.length).toBeGreaterThan(0);
    
    // Verificar que al menos una imagen use ruta relativa
    const hasRelativePath = Array.from(images).some(img => {
      const src = img.getAttribute('src');
      return src && (src.startsWith('./') || src.startsWith('images/') || !src.startsWith('http'));
    });
    
    expect(hasRelativePath).toBe(true);
  });

  test('Las imágenes deben tener atributo alt', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const images = document.querySelectorAll('img');
    
    expect(images.length).toBeGreaterThan(0);
    
    images.forEach(img => {
      expect(img.hasAttribute('alt')).toBe(true);
      expect(img.getAttribute('alt')).toBeTruthy();
    });
  });

  test('galeria.html debe contener un encabezado principal', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    expect(document.querySelector('h1')).toBeTruthy();
  });

  test('galeria.html debe contener al menos un párrafo descriptivo', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    expect(document.querySelector('p')).toBeTruthy();
  });

  test('Las rutas de las imágenes deben seguir buenas prácticas', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const images = document.querySelectorAll('img');
    
    expect(images.length).toBeGreaterThan(0);
    
    images.forEach(img => {
      const src = img.getAttribute('src');
      expect(src).toBeTruthy();
      
      // No debe usar rutas absolutas del sistema
      expect(src).not.toMatch(/^[A-Z]:\\/);
      expect(src).not.toMatch(/^\/[^\/]/);
      
      // No debe tener espacios en las rutas
      expect(src).not.toMatch(/\s/);
    });
  });

  test('Debe existir al menos un archivo de imagen en la carpeta images', () => {
    if (fs.existsSync(imgPath)) {
      const files = fs.readdirSync(imgPath);
      const imageFiles = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext);
      });
      
      expect(imageFiles.length).toBeGreaterThan(0);
    }
  });
});
