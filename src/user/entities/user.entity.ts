import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Exclude, Expose } from "class-transformer";
import {Review} from "../../review/entities/review.entity";
import {Order} from "../../order/entities/order.entity";
import {Cart} from "../../cart/entities/cart.entity";

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
    @OneToMany(() => Review,
        (review : Review) => review.user)
    reviews : Review[]
    @OneToMany(() => Order,
        (order : Order) => order.user)
    orders : Order[]

    @OneToOne(() => Cart, (cart : Cart) => cart.user)
    cart: Cart;

}