import {Order} from "../../order/entities/order.entity";
import {Product} from "../../product/entities/product.entity";

export class CreateOrderItemDto {
    total: number;
    quantity: number;
    order: Order;
    product: Product;
}