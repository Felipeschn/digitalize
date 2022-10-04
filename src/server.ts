import express from "express";
import { AppDataSource } from "./repositories/database";
import { router } from "./routes";

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(router);

    return app.listen(process.env.PORT, () =>
      console.log(`Server started at port ${process.env.PORT} ✔`)
    );
  })
  .catch((err) => console.log("Unable to connect to database:", err));
