import { Client } from "pg";
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "data",
  password: "cherraqi",
  port: 5432,
});

client
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((error) => console.error("Error connecting to PostgreSQL", error));

export default client;
