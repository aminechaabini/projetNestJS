import {Column, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Exclude, Expose } from "class-transformer";
import {Product} from "../../product/entities/product.entity";

@Entity()
export class Manufacturer {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
    @ManyToOne(() => Product,
        (product : Product) => product.category)
    products : Product[]
    @DeleteDateColumn()
    isDeleted : Date
}