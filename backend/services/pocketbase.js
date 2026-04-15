const PocketBase = require('pocketbase/cjs');
require('dotenv').config();

const pb = new PocketBase(process.env.VITE_POCKETBASE_URL || 'http://127.0.0.1:8090');

// Admin auth if needed
const adminAuth = async () => {
    try {
        await pb.admins.authWithPassword(
            process.env.POCKETBASE_ADMIN_EMAIL,
            process.env.POCKETBASE_ADMIN_PASSWORD
        );
    } catch (error) {
        console.error('PocketBase Admin Auth Error:', error.message);
    }
};

module.exports = { pb, adminAuth };
