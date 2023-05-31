import {Column, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "../../product/entities/product.entity";
import {User} from "../../user/entities/user.entity";

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
    @ManyToOne(() => Product,
        (product : Product) => product.reviews)
    product : Product
    @ManyToOne(() => User,
        (user : User) => user.reviews)
    user : User
    @DeleteDateColumn()
    isDeleted : Date

}