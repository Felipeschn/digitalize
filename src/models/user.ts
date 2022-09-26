import { Schema, Document, model } from "mongoose";

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
  {
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret.id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export const UserModel = model<IUserModel>("User", schema);
