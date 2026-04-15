const express = require('express');
const router = express.Router();
const { pb } = require('../services/pocketbase');

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const authData = await pb.collection('users').authWithPassword(email, password);
        res.json({
            token: authData.token,
            user: authData.record
        });
    } catch (error) {
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
});

// Logout
router.post('/logout', (req, res) => {
    // PocketBase client side handles clearing token, but we can log it
    res.json({ message: 'Logout exitoso' });
});

// Me
router.get('/me', async (req, res) => {
    // Logic to verify token and return current user
    res.json({ message: 'User profile' });
});

module.exports = router;
