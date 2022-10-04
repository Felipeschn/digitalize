import { DocFile } from "../../entities/DocFile";
import { AppDataSource } from "../database";

export const docFileRepository = AppDataSource.getRepository(DocFile);
