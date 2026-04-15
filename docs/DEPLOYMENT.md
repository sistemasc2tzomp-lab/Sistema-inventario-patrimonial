# Guía de Despliegue - SIPM SaaS

Esta guía detalla cómo poner el sistema en producción (Nube).

## 1. PocketBase (Base de Datos)
La opción más sencilla para pruebas es **Pockethost.io**:
1. Regístrate en [pockethost.io](https://pockethost.io).
2. Crea una nueva instancia (ej: `sipm-tzomp`).
3. Sube tus configuraciones o utiliza el panel para crear las colecciones.
4. Obtén tu URL: `https://sipm-tzomp.pockethost.io`.

## 2. Backend (Node.js API)
He creado un archivo `render.yaml` para despliegue automático en **Render.com**:
1. Sincroniza tu cuenta de GitHub con Render.
2. Crea un nuevo **Blueprint Instance**.
3. Selecciona este repositorio.
4. Render configurará automáticamente el servicio de Backend.
   * *Recuerda actualizar la variable `VITE_POCKETBASE_URL` en el panel de Render con tu URL de Pockethost.*

## 3. Frontend (Interfaz)
Ya está configurado para **GitHub Pages**:
1. Una vez desplegado el Backend en Render, obtén la URL (ej: `https://sipm-backend.onrender.com`).
2. En tu repositorio de GitHub, ve a `Settings` > `Secrets and variables` > `Actions`.
3. Crea una variable llamada `VITE_API_URL` con la URL de tu backend.
4. El flujo de GitHub Actions reconstruirá y desplegará el frontal automáticamente.

---

### Variables de Entorno Necesarias
| Variable | Descripción |
| --- | --- |
| `VITE_POCKETBASE_URL` | URL de tu servidor PocketBase |
| `POCKETBASE_ADMIN_EMAIL` | Email del administrador de PocketBase |
| `POCKETBASE_ADMIN_PASSWORD` | Password del administrador de PocketBase |
| `JWT_SECRET` | Clave secreta para tokens (Generada automáticamente en Render) |
| `VITE_API_URL` | URL del Backend desde el Frontend |
