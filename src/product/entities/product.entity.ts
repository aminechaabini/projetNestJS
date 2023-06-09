import {Column, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Exclude, Expose } from "class-transformer";
import {Category} from "../../category/entities/category.entity";
import {Manufacturer} from "../../manufacturer/entities/manufacturer.entity";
import {Review} from "../../review/entities/review.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    price: number;
    @OneToMany(() => Category,
        (category : Category) => category.products)
    category : Category
    @OneToMany(() => Manufacturer,
        (manufacturer : Manufacturer) => manufacturer.products)
    manufacturer : Manufacturer
    @OneToMany(() => Review,
        (review : Review) => review.product)
    reviews : Review[]
    @DeleteDateColumn()
    isDeleted : Date

}