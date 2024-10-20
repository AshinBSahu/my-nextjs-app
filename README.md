# Next.js App with MySQL Database in Docker

This repository contains a simple **Next.js** application that accepts a user's name and stores it in a **MySQL** database. The project demonstrates how to set up a basic frontend-backend app and how to containerize both the app and the database using Docker.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Running the App Locally](#running-the-app-locally)
4. [Docker Setup](#docker-setup)
   - [Building the Docker Image](#building-the-docker-image)
   - [Running the Docker Container](#running-the-docker-container)
5. [Accessing the Application](#accessing-the-application)
6. [Validate Database](#validate-database)
7. [Contributing](#contributing)
8. [License](#license)
9. [Instructions to Pull and Run the Docker Image from GitHub Packages](#instructions-to-pull-and-run-the-docker-image-from-github-packages)
[   - Docker Prerequisites](#docker-prerequisites)
10. [Steps to Pull and Run the Docker Image](#steps-to-pull-and-run-the-docker-image)
   - [Log in to GitHub Packages](#log-in-to-github-packages)
   - [Pull the Docker Image](#pull-the-docker-image)
   - [Run the Docker Container](#run-the-docker-container)
   - [Access the Application](#access-the-application)
12. [Notes](#notes)

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
- [MySQL](https://www.mysql.com/products/community/)

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


- Make sure MySQL is installed and running on your system.
- The `init.sql` file located in the mysql-init folder of your project directory (this file contains the SQL commands to create the database, tables, and app user).


1. **Open a Terminal**:
   Open a terminal window on your machine.

2. **Log in to MySQL**:
   Use the following command to log in to your MySQL server. You may need to replace `root` with your MySQL username if it's different:

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
    docker build -t my-nextjs-app .
    ```

### Running the Docker Container

1. Once the image is built, run the Docker container:

    ```bash
    docker run -p 3000:3000 -p 3306:3306 my-nextjs-app
    ```

2. This will start the Next.js app on port `3000` and MySQL on port `3306`.


## Accessing the Application

    
    http://localhost:3000
    
## Validate Database

To manually connect to the MySQL database running in the container, use:

    
    mysql -u app_user -p
    
Then, you can run queries like:


    USE my_nextjs_app;
    SELECT * FROM users;


## Contributing

Contributions are welcome! Please fork this repository, create a new branch, and submit a pull request.

## License

    Open Source


## Instructions to Pull and Run the Docker Image from GitHub Packages

Follow these steps to pull and run the Docker image stored in GitHub Packages:

   **Docker Prerequisites**
- Docker installed on your local machine.
- Access to the GitHub repository where the Docker image is stored.
- Logged in to the GitHub Container Registry (required to pull images from GitHub Packages).

### Steps to Pull and Run the Docker Image

1. **Log in to GitHub Packages**:
   First, authenticate Docker with GitHub Packages by running the following command:

   ```bash
   echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
   ```

   Replace:
   - `CR_PAT` with your GitHub Personal Access Token (PAT) that has permissions to access packages.
   - `USERNAME` with your GitHub username.

2. **Pull the Docker Image**:
   Run the following command to pull the Docker image from GitHub Packages:

   ```bash
   docker pull ghcr.io/ashinbsahu/my-nextjs-app:latest
   ```
   OR
   ```linux/amd64
   docker pull ghcr.io/ashinbsahu/my-nextjs-app:latest@sha256:0dbae5c1214650f4d1220f2a742b717159bafe5292d2073dfc2568afc076ecc1
    ```
    OR
    ```unknown/unknown
    docker pull ghcr.io/ashinbsahu/my-nextjs-app:latest@sha256:db122f9368037f2f2594e108d4e1ced9297bf9327d1289a778a5346042b6d4a5
    ```

3. **Run the Docker Container**:
   After pulling the image, run the following command to start the container:

   ```bash
   docker run -d -p 3000:3000 -p 3306:3306 ghcr.io/ashinbsahu/my-nextjs-app:latest
   ```

   This will map port 3000 & 3036 of your machine to port 3000 & 3036 of the container.

   Example:
   ```bash
   docker run -d -p 3000:3000 -p 3306:3306 ghcr.io/ashinbsahu/my-nextjs-app:latest
   ```

4. **Access the Application**:
   Open your browser and go to:

   ```
   http://localhost:3000
   ```

   You should now see the application running.

### Notes
- Ensure you have the necessary access permissions to the GitHub repository and the Docker image.
- Adjust the port number (`3000:3000` and `3306:3306`) based on the port your application uses inside the container.



