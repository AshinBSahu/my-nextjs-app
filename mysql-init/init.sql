CREATE DATABASE IF NOT EXISTS my_nextjs_app;
USE my_nextjs_app;

CREATE TABLE IF NOT EXISTS names_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
-- Create app_user and grant permissions
CREATE USER 'app_user'@'%' IDENTIFIED BY 'app_password';  -- Specify the password you want
GRANT ALL PRIVILEGES ON my_nextjs_app.* TO 'app_user'@'%';
FLUSH PRIVILEGES;
