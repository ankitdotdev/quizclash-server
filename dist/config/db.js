"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
// Import mysql2 promise-based client
// Using /promise gives us async/await support instead of callbacks
const promise_1 = __importDefault(require("mysql2/promise"));
// File system module to read SSL certificate file
const fs_1 = __importDefault(require("fs"));
// Path module to safely construct file paths
const path_1 = __importDefault(require("path"));
// Loads environment variables from .env file into process.env
require("dotenv/config");
// ------------------------------------------------------------
// Read SSL certificate file (CA - Certificate Authority)
// This is required when connecting to cloud databases
// that enforce SSL (e.g., AWS RDS, PlanetScale, etc.)
// ------------------------------------------------------------
// __dirname = current directory of this file
// "../../certs/ca.pem" navigates to certs folder
// readFileSync loads the certificate into memory
const ca = fs_1.default.readFileSync(path_1.default.join(__dirname, "../../certs/ca.pem"));
// ------------------------------------------------------------
// Create a MySQL connection pool
// Pool = multiple reusable DB connections
// Better performance than creating new connection every request
// ------------------------------------------------------------
exports.pool = promise_1.default.createPool({
    // Database host (e.g., localhost or cloud DB endpoint)
    host: process.env.DB_HOST,
    // Port number (usually 3306 for MySQL)
    port: Number(process.env.DB_PORT),
    // Database username
    user: process.env.DB_USER,
    // Database password
    password: process.env.DB_PASSWORD,
    // Specific database name to use
    database: process.env.DB_NAME,
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
