const mysql = require("mysql");
require("dotenv").config();

// Create a single connection pool directly from config
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

// Test the connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1);
  }
  if (connection) connection.release();
  console.log("✅ Connected to MySQL database.");
});

module.exports = db;
