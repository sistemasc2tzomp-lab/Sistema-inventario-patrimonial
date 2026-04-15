const PocketBase = require('pocketbase/cjs');
require('dotenv').config();

const pb = new PocketBase(process.env.VITE_POCKETBASE_URL || 'http://127.0.0.1:8090');

async function seed() {
    try {
        console.log('--- SISTEMA INVENTARIO PATRIMONIAL SEEDING ---');
        
        // 1. Auth as Admin
        console.log('Autenticando como administrador de PocketBase...');
        await pb.admins.authWithPassword(
            process.env.POCKETBASE_ADMIN_EMAIL,
            process.env.POCKETBASE_ADMIN_PASSWORD
        );
        console.log('¡Autenticado!');

        // 2. Crear Roles
        console.log('Creando roles...');
        const rolesData = [
            { nombre: 'admin', descripcion: 'Control total del sistema' },
            { nombre: 'editor', descripcion: 'Gestión de inventario y responsables' },
            { nombre: 'usuario', descripcion: 'Gestión de propios activos' },
            { nombre: 'visor', descripcion: 'Solo lectura' }
        ];

        for (const role of rolesData) {
            try {
                await pb.collection('roles').create(role);
                console.log(`Rol creado: ${role.nombre}`);
            } catch (e) {
                console.log(`Rol ${role.nombre} ya existe o error.`);
            }
        }

        // 3. Crear Departamentos de ejemplo
        console.log('Creando departamentos...');
        const deptos = ['Dirección General', 'Sistemas', 'Recursos Humanos', 'Finanzas', 'Seguridad Pública'];
        for (const depto of deptos) {
            try {
                await pb.collection('departamentos').create({ nombre: depto });
            } catch (e) {}
        }

        // 4. Crear Categorías de ejemplo
        console.log('Creando categorías...');
        const cats = ['Mobiliario', 'Equipo de Cómputo', 'Vehículos', 'Maquinaria', 'Herramientas'];
        for (const cat of cats) {
            try {
                await pb.collection('categorias').create({ nombre: cat });
            } catch (e) {}
        }

        // 5. Crear Usuario Admin Inicial
        console.log('Creando usuario admin inicial...');
        try {
            const adminRole = await pb.collection('roles').getFirstListItem('nombre="admin"');
            await pb.collection('users').create({
                email: 'admin@sistema.local',
                password: 'AdminSecure123',
                passwordConfirm: 'AdminSecure123',
                name: 'Administrador del Sistema',
                role_id: adminRole.id
            });
            console.log('Usuario admin creado exitosamente.');
        } catch (e) {
            console.log('Usuario admin ya existe o error.');
        }

        console.log('--- SEEDING COMPLETADO EXITOSAMENTE ---');
    } catch (error) {
        console.error('Error durante el seeding:', error.message);
    }
}

seed();
