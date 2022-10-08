import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DocFile } from "../entities/DocFile";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  userId: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => DocFile, (docFile) => docFile.user, { onDelete: "CASCADE" })
  documents: DocFile[];

  @CreateDateColumn()
  createdAt: Date;
}
