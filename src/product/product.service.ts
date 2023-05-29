import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Product} from "./entities/product.entity";



@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ) {
        super(productRepository);
    }
    // add product
    async addProduct(product: AddProductDTO): Promise<Product> {
        const newProduct = this.productRepository.create(product);
        await this.productRepository.save(newProduct);
        }
        return newProduct;
    }
    // change product
    //delete product soft w zebi
    //find product by criteria
}
