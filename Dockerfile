# Use an official Node.js image as the base
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install MySQL
RUN apt-get update && \
    apt-get install -y default-mysql-server && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Expose the ports
EXPOSE 3000
EXPOSE 3306

# Copy the SQL initialization script
COPY ./mysql-init/init.sql /docker-entrypoint-initdb.d/

# Create an entrypoint script
COPY ./entrypoint.sh /entrypoint.sh

# Make the entrypoint script executable
RUN chmod +x /entrypoint.sh

# Command to run the entrypoint script
CMD ["/entrypoint.sh"]
