// Import mysql2 promise-based client
// Using /promise gives us async/await support instead of callbacks
import mysql from "mysql2/promise";

// File system module to read SSL certificate file
import fs from "fs";

// Path module to safely construct file paths
import path from "path";

// Loads environment variables from .env file into process.env
import "dotenv/config";

// ------------------------------------------------------------
// Read SSL certificate file (CA - Certificate Authority)
// This is required when connecting to cloud databases
// that enforce SSL (e.g., AWS RDS, PlanetScale, etc.)
// ------------------------------------------------------------

// __dirname = current directory of this file
// "../../certs/ca.pem" navigates to certs folder
// readFileSync loads the certificate into memory
const ca = fs.readFileSync(path.join(__dirname, "../../certs/ca.pem"));

// ------------------------------------------------------------
// Create a MySQL connection pool
// Pool = multiple reusable DB connections
// Better performance than creating new connection every request
// ------------------------------------------------------------

export const pool = mysql.createPool({
  // Database host (e.g., localhost or cloud DB endpoint)
  host: process.env.DB_HOST!,

  // Port number (usually 3306 for MySQL)
  port: Number(process.env.DB_PORT),

  // Database username
  user: process.env.DB_USER!,

  // Database password
  password: process.env.DB_PASSWORD!,

  // Specific database name to use
  database: process.env.DB_NAME!,

  // ----------------------------------------------------------
  // SSL Configuration
  // Ensures encrypted connection between app and database
  // ----------------------------------------------------------
  ssl: {
    ca, // Certificate Authority file
    rejectUnauthorized: true,
    // Ensures DB certificate must be valid
    // Prevents man-in-the-middle attacks
  },

  // ----------------------------------------------------------
  // Pool Configuration
  // ----------------------------------------------------------

  // If all connections are busy, wait instead of throwing error
  waitForConnections: true,

  // Maximum number of connections in the pool
  // 10 concurrent DB connections allowed
  connectionLimit: 10,
});
