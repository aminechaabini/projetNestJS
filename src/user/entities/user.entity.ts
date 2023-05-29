import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Exclude, Expose } from "class-transformer";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    first_name: string;
    @Column()
    last_name: string;
    @Column()
    email: string;
    @Column()
    @Exclude({ toPlainOnly: true })
    password: string;

}