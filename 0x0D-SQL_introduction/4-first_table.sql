-- 4-create_table.sql

-- This script creates a table called first_table in the specified database

-- Specify the database name
USE `mysql`;

-- Create the first_table if it doesn't exist
CREATE TABLE IF NOT EXISTS first_table (
    id INT,
    name VARCHAR(256)
);
