import path from "path";
const level = require('level');

const dbPath = process.env.DB_PATH || path.join(__dirname, 'mydb');
const options = {
    keyEncoding: 'binary',
    valueEncoding: 'json'
};

export const Database = level(dbPath, options);