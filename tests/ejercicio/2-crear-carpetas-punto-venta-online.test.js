const fs = require('fs');
const path = require('path');

describe('Ejercicio 2: Estructura de carpetas punto-venta-online', () => {
    const basePath = path.join(__dirname, '../../src');
    
    test('debe existir la carpeta src/', () => {
        expect(fs.existsSync(basePath)).toBe(true);
        expect(fs.statSync(basePath).isDirectory()).toBe(true);
    });

    test('debe existir la carpeta punto-venta-online/', () => {
        const puntoVentaPath = path.join(basePath, 'punto-venta-online');
        expect(fs.existsSync(puntoVentaPath)).toBe(true);
        expect(fs.statSync(puntoVentaPath).isDirectory()).toBe(true);
    });

    describe('Frontend', () => {
        const frontendPath = path.join(basePath, 'punto-venta-online/frontend');

        test('debe existir la carpeta frontend/', () => {
            expect(fs.existsSync(frontendPath)).toBe(true);
            expect(fs.statSync(frontendPath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta frontend/css/', () => {
            const cssPath = path.join(frontendPath, 'css');
            expect(fs.existsSync(cssPath)).toBe(true);
            expect(fs.statSync(cssPath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta frontend/js/', () => {
            const jsPath = path.join(frontendPath, 'js');
            expect(fs.existsSync(jsPath)).toBe(true);
            expect(fs.statSync(jsPath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta frontend/img/', () => {
            const imgPath = path.join(frontendPath, 'img');
            expect(fs.existsSync(imgPath)).toBe(true);
            expect(fs.statSync(imgPath).isDirectory()).toBe(true);
        });
    });

    describe('Backend', () => {
        const backendPath = path.join(basePath, 'punto-venta-online/backend');

        test('debe existir la carpeta backend/', () => {
            expect(fs.existsSync(backendPath)).toBe(true);
            expect(fs.statSync(backendPath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta backend/controllers/', () => {
            const controllersPath = path.join(backendPath, 'controllers');
            expect(fs.existsSync(controllersPath)).toBe(true);
            expect(fs.statSync(controllersPath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta backend/models/', () => {
            const modelsPath = path.join(backendPath, 'models');
            expect(fs.existsSync(modelsPath)).toBe(true);
            expect(fs.statSync(modelsPath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta backend/routes/', () => {
            const routesPath = path.join(backendPath, 'routes');
            expect(fs.existsSync(routesPath)).toBe(true);
            expect(fs.statSync(routesPath).isDirectory()).toBe(true);
        });
    });

    describe('Database', () => {
        const databasePath = path.join(basePath, 'punto-venta-online/database');

        test('debe existir la carpeta database/', () => {
            expect(fs.existsSync(databasePath)).toBe(true);
            expect(fs.statSync(databasePath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta database/migrations/', () => {
            const migrationsPath = path.join(databasePath, 'migrations');
            expect(fs.existsSync(migrationsPath)).toBe(true);
            expect(fs.statSync(migrationsPath).isDirectory()).toBe(true);
        });
    });

    describe('Documentación', () => {
        test('debe existir la carpeta src/', () => {
            const srcPath = path.join(basePath, 'punto-venta-online/src');
            expect(fs.existsSync(srcPath)).toBe(true);
            expect(fs.statSync(srcPath).isDirectory()).toBe(true);
        });
    });
});