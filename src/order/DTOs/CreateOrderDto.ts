import {User} from "../../user/entities/user.entity";

export class CreateOrderDto {
    totalPrice: number;
    paymentMethod: string;
    shippingAddress: string;
    user: User;
}