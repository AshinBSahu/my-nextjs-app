#!/bin/bash

# Start MySQL server in the background
mysqld_safe &

# Wait for MySQL to initialize
until mysqladmin ping > /dev/null 2>&1; do
    echo "Waiting for MySQL..."
    sleep 2
done

echo "MySQL DB is started"

# Initialize the database with SQL script
mysql -u root < /docker-entrypoint-initdb.d/init.sql

# Start the Next.js app
npm run dev
