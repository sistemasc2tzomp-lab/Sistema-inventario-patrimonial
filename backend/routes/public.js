const express = require('express');
const router = express.Router();
const { pb } = require('../services/pocketbase');

// Consulta pública de activo por QR
router.get('/activo/:qr', async (req, res) => {
    const { qr } = req.params;
    try {
        // Buscamos en la colección de inventario_activos por el campo qr_code
        // Usamos getFirstListItem para buscar por un filtro
        const record = await pb.collection('inventario_activos').getFirstListItem(`qr_code="${qr}"`, {
            expand: 'responsable_id,departamento_id'
        });

        if (!record) {
            return res.status(404).json({ error: 'Activo no encontrado' });
        }

        // Devolvemos solo la información pública requerida
        res.json({
            nombre: record.nombre,
            responsable: record.expand?.responsable_id?.nombre || 'No asignado',
            departamento: record.expand?.departamento_id?.nombre || 'No asignado',
            estatus: record.estatus || record.estado,
            fecha_resguardo: record.fecha_resguardo,
            vigencia_resguardo: record.vigencia_resguardo
        });
    } catch (error) {
        console.error('Error en consulta pública:', error.message);
        res.status(500).json({ error: 'Error al consultar el activo' });
    }
});

module.exports = router;
