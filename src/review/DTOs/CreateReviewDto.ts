import {Product} from "../../product/entities/product.entity";
import {User} from "../../user/entities/user.entity";

export class CreateReviewDto {
    title: string;
    comment: string;
    rating: number;
    product: Product;
    user: User;
}