import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity("docFiles")
export class DocFile {
  @PrimaryGeneratedColumn("uuid")
  docFileId: string;

  @Column()
  title: string;

  @Column()
  docType: number;

  @Column()
  bucketUrl: string;

  @ManyToOne(() => User, (user) => user.documents)
  @JoinColumn({ name: "users_userId" })
  user: User;

  @CreateDateColumn({ nullable: true })
  expiresAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
