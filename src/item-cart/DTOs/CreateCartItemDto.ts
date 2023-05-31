import {Cart} from "../../cart/entities/cart.entity";
import {Product} from "../../product/entities/product.entity";

export class CreateItemCartDto {
    total: number;
    quantity: number;
    cart: Cart;
    product: Product;
}