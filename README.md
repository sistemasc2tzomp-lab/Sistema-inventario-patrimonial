# SISTEMA INVENTARIO PATRIMONIAL MUNICIPAL SaaS

Sistema institucional de gestión de inventario patrimonial con integración a PocketBase y migración automática desde Google Sheets.

## Estructura del Proyecto

- `/frontend`: React + Vite + TailwindCSS.
- `/backend`: Node.js + Express + Architectura REST.
- `/pocketbase`: Base de datos y configuraciones.
- `/docs`: Documentación del sistema.
- `/scripts`: Scripts de utilidad y seeding.

## Requisitos

- Node.js (v18+)
- PocketBase executable (en /pocketbase/pb.exe)
- Conexión a Internet (para Google Sheets API)

## Instalación

1. Clonar el repositorio.
2. Ejecutar `npm install` en el directorio raíz (instalará dependencias de frontend y backend).
3. Configurar el archivo `.env` basado en `.env.example`.
4. Ejecutar `npm run seed` para inicializar la base de datos.

## Ejecución

```bash
npm run dev
```

Este comando inicia tanto el backend como el frontend de forma simultánea.

## Roles del Sistema

- **Admin**: Control total del sistema.
- **Editor**: Gestión de inventario, responsables y categorías.
- **Usuario**: Gestión de sus propios activos y resguardos.
- **Visor**: Solo lectura de la información.

## Consulta Pública QR

El sistema permite la consulta pública de activos mediante códigos QR. La ruta pública es `/consulta-activo/:qr`.
