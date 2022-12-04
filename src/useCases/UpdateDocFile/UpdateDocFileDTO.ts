import { DocType } from "../../entities/DocFile";

export interface IUpdateDocFileDTO {
  docFileId: string;
  title: string;
  description: string;
  expiresAt: Date | null;
}
