const fs = require('fs');
const path = require('path');

describe('Ejercicio 1: Crear carpetas', () => {
  const rootPath = path.join(__dirname, '../../');
  
  test('La carpeta src debe existir', () => {
    const srcPath = path.join(rootPath, 'src');
    
    expect(fs.existsSync(srcPath)).toBe(true);
    
    const stats = fs.statSync(srcPath);
    expect(stats.isDirectory()).toBe(true);
  });
  
  test('La carpeta src/data debe existir', () => {
    const dataPath = path.join(rootPath, 'src', 'data');
    
    expect(fs.existsSync(dataPath)).toBe(true);
    
    const stats = fs.statSync(dataPath);
    expect(stats.isDirectory()).toBe(true);
  });

  test('La carpeta src/ejercicio-1 debe existir', () => {
    const ejercicio1Path = path.join(rootPath, 'src', 'ejercicio-1');

    expect(fs.existsSync(ejercicio1Path)).toBe(true);

    const stats = fs.statSync(ejercicio1Path);
    expect(stats.isDirectory()).toBe(true);
   });
  
 });
