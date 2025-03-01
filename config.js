require('dotenv').config();

exports.port = process.argv[2] || process.env.PORT || 8888;
exports.dbUrl = process.env.MONGO_URL || process.env.DB_URL || 'mongodb://localhost:27017/test';
exports.secret = process.env.JWT_SECRET || 'esta-es-la-api-burger-queen';
exports.adminEmail = process.env.ADMIN_EMAIL || 'admin@localhost.com';
exports.adminPassword = process.env.ADMIN_PASSWORD || 'changeme';
exports.dbName = process.env.DB_NAME || 'burgerqueen';
