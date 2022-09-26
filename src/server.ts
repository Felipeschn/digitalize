import { app } from "./app";
import "dotenv/config";
import * as database from "./repositories/database";

database.connect();
app.listen(process.env.PORT, () =>
  console.log(`Server started at port:${process.env.PORT} ✔`)
);
