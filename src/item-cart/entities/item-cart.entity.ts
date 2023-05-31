import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import {Order} from "../../order/entities/order.entity";
import {Product} from "../../product/entities/product.entity";
import {Cart} from "../../cart/entities/cart.entity";

@Entity()
export class ItemCart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    total: number;

    @Column()
    quantity: number;

    @ManyToOne(() => Cart, (cart : Cart) => cart.cartItems)
    cart : Cart;

    @ManyToOne(() => Product, product => product.cartItems)
    product: Product;
}