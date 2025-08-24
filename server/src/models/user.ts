import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn("uuid")
    uid!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    name!: string;

    @Column()
    password!: string;

    @Column()
    role!: string;

    @Column()
    createdBy!: string;

    @CreateDateColumn({ name: "created_at" })
    cretedAt!: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt!: Date;
}
