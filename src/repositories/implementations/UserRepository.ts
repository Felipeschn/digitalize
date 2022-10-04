import { User } from "../../entities/User";
import { AppDataSource } from "../database";

export const userRepository = AppDataSource.getRepository(User);
