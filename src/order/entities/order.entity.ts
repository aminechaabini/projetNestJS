import {Column, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Exclude, Expose } from "class-transformer";
import {Category} from "../../category/entities/category.entity";
import {Manufacturer} from "../../manufacturer/entities/manufacturer.entity";
import {Review} from "../../review/entities/review.entity";
import {Product} from "../../product/entities/product.entity";
import {OrderItem} from "../../item-order/entities/order-item.entity";
import {User} from "../../user/entities/user.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    totalPrice: number;

    @Column() //change to enum
    paymentMethod: string;

    @Column()
    shippingAddress: string;

    @OneToMany(() => OrderItem,
        ( orderItem : OrderItem ) => orderItem.order)
    orderItems: OrderItem[];

    @ManyToOne(() => User, user => user.orders)
    user: User;

    @DeleteDateColumn()
    isDeleted : Date

}