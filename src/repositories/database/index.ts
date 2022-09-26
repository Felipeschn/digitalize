import mongoose from "mongoose";

export const connect = async (): Promise<void> => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@digitalize.sg1nusm.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      throw new Error(`Unable to connect to the database: ${err}`);
    });
};

export const close = (): Promise<void> => mongoose.connection.close();
