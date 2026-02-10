// Import Express framework
import express from "express";

// Load environment variables from .env file
import "dotenv/config";

// Import MySQL connection pool
import { pool } from "./config/db";

// Initialize Express app
const app = express();

// Define server port (from env or fallback)
const port = process.env.PORT || 8001;

// Immediately Invoked Async Function Expression (IIFE)
// Used to handle async/await at the top level
(async () => {
  try {
    // Get a connection from the MySQL pool
    const conn = await pool.getConnection();

    // Run a simple test query to verify DB connection
    await conn.query("SELECT 1");

    // Release the connection back to the pool
    conn.release();

    console.log(`MySQL Connected`);

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is running on port : ${port}`);
    });
  } catch (error) {
    // Log database connection errors
    console.error("Database connection failed");
    console.error(error);

    // Exit the process if DB connection fails
    process.exit(1);
  }
})();
