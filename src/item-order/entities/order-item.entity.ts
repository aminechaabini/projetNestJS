import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm';
import {Order} from "../../order/entities/order.entity";
import {Product} from "../../product/entities/product.entity";

@Entity()
export class OrderItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    total: number;

    @Column()
    quantity: number;

    @OneToMany(() => Order, order => order.orderItems)
    order: Order;

    @ManyToOne(() => Product)
    product: Product;
}