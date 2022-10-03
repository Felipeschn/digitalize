import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { DocFile } from "../entities/DocFile";

@Entity()
export class User {
  @ObjectIdColumn()
  userId: ObjectID;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column(() => DocFile)
  documents: DocFile[];
}
