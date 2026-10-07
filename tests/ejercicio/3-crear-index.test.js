const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 3: Estructura base HTML', () => {
  const rootPath = path.join(__dirname, '../../');
  
  test('La carpeta src/ejercicio-1 debe existir', () => {
    const srcPath = path.join(rootPath, 'src/ejercicio-1');
    
    expect(fs.existsSync(srcPath)).toBe(true);
    
    const stats = fs.statSync(srcPath);
    expect(stats.isDirectory()).toBe(true);
  });
  
    test('El archivo src/ejercicio-1/index.html debe existir', () => {
      const indexPath = path.join(rootPath, 'src', 'ejercicio-1', 'index.html');

       expect(fs.existsSync(indexPath)).toBe(true);
        
        const stats = fs.statSync(indexPath);
        expect(stats.isFile()).toBe(true);
      });

      test('El archivo index.html debe tener estructura HTML básica', () => {
        const indexPath = path.join(rootPath, 'src', 'ejercicio-1', 'index.html');
        expect(fs.existsSync(indexPath)).toBe(true);
       // if (fs.existsSync(indexPath)) {
          const content = fs.readFileSync(indexPath, 'utf8');
          
          expect(content).toMatch(/<!DOCTYPE\s+html>/i);
          expect(content).toMatch(/<html[^>]*>/i);
          expect(content).toMatch(/<head[^>]*>/i);
          expect(content).toMatch(/<\/head>/i);
          expect(content).toMatch(/<body[^>]*>/i);
          expect(content).toMatch(/<\/body>/i);
          expect(content).toMatch(/<\/html>/i);
       // } 
      });

      test('El archivo index.html debe tener título', () => {
        const indexPath = path.join(rootPath, 'src', 'ejercicio-1', 'index.html'); 
        const content = fs.readFileSync(indexPath, 'utf8');
        expect(content).toMatch(/<title[^>]*>.*<\/title>/i);     
      });

       test('index.html debería contener un encabezado', () => {
              const indexPath = path.join(rootPath, 'src', 'ejercicio-1', 'index.html');
              const content = fs.readFileSync(indexPath, 'utf8');
              const dom = new JSDOM(content);
              const document = dom.window.document;
              expect(document.querySelector('h1')).toBeTruthy();
          });

          test('index.html debería contener un párrafo', () => {
              const indexPath = path.join(rootPath, 'src', 'ejercicio-1', 'index.html');
              const content = fs.readFileSync(indexPath, 'utf8');
              const dom = new JSDOM(content);
              const document = dom.window.document;
              expect(document.querySelector('p')).toBeTruthy();
          });    

      test('index.html debería contener una lista desordenada', () => {
          const indexPath = path.join(rootPath, 'src', 'ejercicio-1', 'index.html');
          const content = fs.readFileSync(indexPath, 'utf8');
          const dom = new JSDOM(content);
          const document = dom.window.document;
          expect(document.querySelector('ul')).toBeTruthy();
      });

       });