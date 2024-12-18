# Dashboard Server

## Description

Dashboard server for the dashboard application.

## Project Setup

### Prerequisites

- Ensure you have [Docker](https://www.docker.com/products/docker-desktop) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine.

### Installing Dependencies

```bash
pnpm install
```

### Setting Up the Database

1. **Create a `.env` file** in the root of your project directory with the following content:

   ```dotenv
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=your_database
   ```

   Replace `your_username`, `your_password`, and `your_database` with your desired database credentials.

2. **Start the PostgreSQL service** using Docker Compose:

   ```bash
   docker-compose up -d
   ```

   This command will start the PostgreSQL database in detached mode.

3. **Access the Database**: The database will be accessible on `localhost:5432`. You can connect to it using any PostgreSQL client with the credentials specified in your `.env` file.

4. **Stopping the Database**: To stop the database, run:

   ```bash
   docker-compose down
   ```

### Compile and Run the Project

```bash
# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

### Additional Notes

- **Data Persistence**: The database data is stored in the `db_volume` directory within your project, ensuring that data is not lost when the container is stopped or removed.
- **Environment Variables**: Ensure that your `.env` file is not committed to version control by keeping it listed in your `.gitignore`.

For any issues or further assistance, please refer to the project's documentation or contact the development team.

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
