import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Review {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    title: string;
    @Column()
    comment: string;
    @Column()
    rating: number;


}