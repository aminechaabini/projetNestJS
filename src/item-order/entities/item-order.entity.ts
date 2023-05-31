import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import {Order} from "../../order/entities/order.entity";
import {Product} from "../../product/entities/product.entity";

@Entity()
export class ItemOrder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    total: number;

    @Column()
    quantity: number;

    @ManyToOne(() => Order, order => order.orderItems)
    order: Order;

    @ManyToOne(() => Product, product => product.orderItems)
    product: Product;
}