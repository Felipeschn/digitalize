import { AppDataSource } from "../../server";

export const connectDB = async (): Promise<void> => {
  AppDataSource.initialize()
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      throw new Error(`Unable to connect to the database: ${err}`);
    });
};
