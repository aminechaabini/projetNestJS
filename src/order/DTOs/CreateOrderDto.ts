export class CreateOrderDto {
    totalPrice: number;
    paymentMethod: string;
    shippingAddress: string;
    user: User;
}