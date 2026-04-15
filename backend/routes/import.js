const express = require('express');
const router = express.Router();
const { fetchSheetData } = require('../services/sheets');
const { pb, adminAuth } = require('../services/pocketbase');

// POST /api/import/google-sheet
router.post('/google-sheet', async (req, res) => {
    try {
        console.log('Iniciando migración desde Google Sheets...');
        const data = await fetchSheetData();
        console.log(`Se obtuvieron ${data.length} registros.`);

        await adminAuth();

        const results = {
            created: 0,
            updated: 0,
            errors: 0
        };

        for (const item of data) {
            try {
                // Buscamos si ya existe por codigo_patrimonial
                let existing = null;
                try {
                    existing = await pb.collection('inventario_activos').getFirstListItem(`codigo_patrimonial="${item.codigo_patrimonial || item.Codigo}"`);
                } catch (e) {
                    // No existe
                }

                const payload = {
                    codigo_interno: item.codigo_interno || item['Código Interno'] || '',
                    codigo_patrimonial: item.codigo_patrimonial || item.Codigo || '',
                    nombre: item.nombre || item.Nombre || '',
                    marca: item.marca || item.Marca || '',
                    modelo: item.modelo || item.Modelo || '',
                    numero_serie: item.numero_serie || item['No. Serie'] || '',
                    estado: item.estado || item.Estado || 'Bueno',
                    valor: parseFloat(item.valor || item.Valor || 0),
                    observaciones: item.observaciones || item.Observaciones || '',
                    estatus: 'Migrado'
                };

                if (existing) {
                    await pb.collection('inventario_activos').update(existing.id, payload);
                    results.updated++;
                } else {
                    await pb.collection('inventario_activos').create(payload);
                    results.created++;
                }
            } catch (err) {
                console.error('Error procesando registro:', err.message);
                results.errors++;
            }
        }

        res.json({
            message: 'Migración completada',
            stats: results
        });

    } catch (error) {
        console.error('Error en importación:', error.message);
        res.status(500).json({ error: 'Error al importar datos: ' + error.message });
    }
});

module.exports = router;
