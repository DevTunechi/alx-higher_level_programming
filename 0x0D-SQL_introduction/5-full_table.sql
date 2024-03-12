-- 5-full_table.sql

-- Prints the full description of the first_table

-- Author: Olatunji Oluwadare

-- Specify database - mysql

-- Get full table description
SELECT COLUMN_NAME, COLUMN_TYPE, IS_NULLABLE, COLUMN_KEY, COLUMN_DEFAULT, EXTRA
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'first_table';
