const QRCode = require('qrcode-svg');

/**
 * Genera un SVG de código QR para una URL de consulta
 * @param {string} code - El código del activo o identificador único
 * @returns {string} - SVG del código QR
 */
const generateQR = (code) => {
    // La URL de consulta pública basada en el código
    const publicUrl = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/consulta-activo/${code}`;
    
    const qr = new QRCode({
        content: publicUrl,
        padding: 4,
        width: 256,
        height: 256,
        color: "#000000",
        background: "#ffffff",
        ecl: "M",
    });

    return qr.svg();
};

module.exports = { generateQR };
