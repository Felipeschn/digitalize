import { app } from "./app";
import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import { connectDB } from "./repositories/database";

export const AppDataSource = new DataSource({
  type: "mongodb",
  url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@digitalize.sg1nusm.mongodb.net/?retryWrites=true&w=majority`,
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  entities: ["src/entities/*.*"],
  useUnifiedTopology: true,
  writeConcern: {
    j: true,
  },
});

connectDB().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Server started at port:${process.env.PORT} ✔`)
  );
});
