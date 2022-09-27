import { Schema, Document, model } from "mongoose";
import bcrypt from "bcrypt";

export interface IUserModel extends Document {
  name: string;
  password: string;
  email: string;
  createdAt: Date;
}

const schema = new Schema<IUserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

schema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

export const UserModel = model<IUserModel>("User", schema);
