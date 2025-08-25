import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "stories" })
export class Story {
    @PrimaryColumn()
    id!: string;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @Column({ name: "room_id" })
    roomId!: number;

    @Column()
    estimate!: number;

    @Column()
    status!: string;

    @Column({name: 'created_by'})
    createdBy!: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt!: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt!: Date;
}
