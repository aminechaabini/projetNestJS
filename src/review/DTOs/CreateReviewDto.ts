export class CreateReviewDto {
    title: string;
    comment: string;
    rating: number;
    product: Product;
    user: User;
}