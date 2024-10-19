# Next.js App with MySQL Database in Docker

This repository contains a simple **Next.js** application that accepts a user's name and stores it in a **MySQL** database. The project demonstrates how to set up a basic frontend-backend app and how to containerize both the app and the database using Docker.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Running the App Locally](#running-the-app-locally)
4. [Docker Setup](#docker-setup)
   - [Building the Docker Image](#building-the-docker-image)
   - [Running the Docker Container](#running-the-docker-container)
5. [Environment Variables](#environment-variables)
6. [Accessing the Application](#accessing-the-application)
7. [MySQL Database Setup](#mysql-database-setup)
8. [Contributing](#contributing)
9. [License](#license)

## Project Overview

This Next.js app asks the user for their name and saves it to a MySQL database. The app and MySQL server are both containerized using Docker, allowing them to be easily deployed and run together.

### Features

- A simple frontend form that takes the user's name.
- Backend API that stores the name in a MySQL database.
- MySQL database running within the same Docker container as the app.

## Prerequisites

Before you begin, ensure you have the following tools installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker](https://www.docker.com/get-started)
- [Git](https://git-scm.com/)
- [MySQL] (https://www.mysql.com/products/community/)

## Running the App Locally

To run the Next.js app locally (without Docker), follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/AshinBSahu/my-nextjs-app.git
    cd my-nextjs-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up the MySQL database:

### Prerequisites

- MySQL server installed and running on your local machine.
- The `init.sql` file located in the mysql-init folder of your project directory (this file contains the SQL commands to create the database, tables, and app user).

### Instructions to create databse

1. **Open a Terminal**:
   Open a terminal window on your machine.

2. **Log in to MySQL**:
   Use the following command to log in to your MySQL server. You may need to replace `root` with your MySQL username if it's different:

   ```bash
   mysql -u root -p
   - Make sure MySQL is installed and running on your system.
   - Create a database named `my_nextjs_app`.

    ```
    exit
    ```

    Then run the following command in your terminal:
    ```
        mysql -u root -p < mysql-init/init.sql
    ```


4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) to see the app.

## Docker Setup

To containerize the Next.js app along with MySQL using Docker, follow the steps below.

### Building the Docker Image

1. Ensure Docker is installed on your system. To check if Docker is installed, run:

    ```bash
    docker --version
    ```

2. Build the Docker image that includes both the Next.js app and MySQL:

    ```bash
    docker build -t yourusername/my-nextjs-app .
    ```

### Running the Docker Container

1. Once the image is built, run the Docker container:

    ```bash
    docker run -p 3000:3000 -p 3306:3306 yourusername/my-nextjs-app
    ```

2. This will start the Next.js app on port `3000` and MySQL on port `3306`.

### Docker Compose Alternative

If you prefer using **Docker Compose** for easier management, create a `docker-compose.yml` file like this:

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root_password
      MYSQL_DATABASE: my_nextjs_app
      MYSQL_USER: app_user
      MYSQL_PASSWORD: user_password
    ports:
      - "3306:3306"
    volumes:
      - ./mysql-init/init.sql:/docker-entrypoint-initdb.d/init.sql
```
## Environment Variables
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root_password
DB_DATABASE=my_nextjs_app
```
## Accessing the Application
```
http://localhost:3000
```
## MySQL Database Setup

To manually connect to the MySQL database running in the container, use:

```

docker exec -it <container-id> mysql -u app_user -p
Then, you can run queries like:
```
Then, you can run queries like:

```
USE my_nextjs_app;
SELECT * FROM users;
```

## Contributing

Contributions are welcome! Please fork this repository, create a new branch, and submit a pull request.

## License
```
    Open Source
```