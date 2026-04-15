const axios = require('axios');
const { parse } = require('csv-parse/sync');

const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID || '1sNOZaDhhkCMRcY2u038tlKHQXS02dSQD3jdTwcQD22Q';
const GID = '1213303181'; // From the provided URL gid=1213303181

const fetchSheetData = async () => {
    try {
        const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/export?format=csv&gid=${GID}`;
        const response = await axios.get(url);
        
        // Parse CSV
        const records = parse(response.data, {
            columns: true,
            skip_empty_lines: true,
            trim: true
        });

        return records;
    } catch (error) {
        console.error('Error fetching Google Sheet:', error.message);
        throw error;
    }
};

module.exports = { fetchSheetData };
