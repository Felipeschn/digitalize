import { DocType } from "../../entities/DocFile";

export interface IFindDocFileDTO {
  userId: string;
  docType: DocType;
}
