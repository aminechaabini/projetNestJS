import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Exclude, Expose } from "class-transformer";
import {Category} from "../../category/entities/category.entity";
import {Manufacturer} from "../../manufacturer/entities/manufacturer.entity";

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

}