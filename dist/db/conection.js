"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var Pool = require('pg').Pool;
var pool = new Pool({
    user: process.env.USER_DB || 'ilhzxelc',
    host: process.env.HOST_DB || 'kashin.db.elephantsql.com',
    database: process.env.DATABASE_NAME || 'ilhzxelc',
    password: process.env.PASSWORD_DB || 'xKyzElRFw7DHX8WZelDW_mVq0zm2i073',
    port: process.env.PORT_DB || 5432,
    ssl: { rejectUnauthorized: false }
});
exports.pool = pool;
