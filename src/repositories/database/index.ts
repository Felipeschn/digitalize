import { DataSource } from "typeorm";
import "reflect-metadata";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOSTNAME,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: ["src/entities/*.*"],
});
