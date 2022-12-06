import express from "express";
import { AppDataSource } from "./repositories/database";
import cors from "cors";

import { router } from "./routes";

const allowedOrigins = ["*"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(cors(options));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(router);

    return app.listen(process.env.PORT, () =>
      console.log(`Server started at port ${process.env.PORT} ✔`)
    );
  })
  .catch((err) => console.log("Unable to connect to database:", err));
