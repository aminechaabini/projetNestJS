// import {Injectable, NotFoundException} from '@nestjs/common';
// import {InjectRepository} from "@nestjs/typeorm";
// import {Repository} from "typeorm";
// import {Product} from "./entities/product.entity";
// import {Manufacturer} from "../manufacturer/entities/manufacturer.entity";
// import {AddProductDTO, } from "./DTOs/addProductDTO";
// import {UpdateProductDTO} from "./DTOs/updateProductDTO";
// import {Category} from "../category/entities/category.entity";
//
//
//
// @Injectable()
// export class ProductService {
//     constructor(
//         @InjectRepository(Product)
//         private productRepository: Repository<Product>
//     ) {
//         super(productRepository);
//     }
//
//     // add product
//     async addProduct(product: AddProductDTO, manufacturer: Manufacturer, category: Category): Promise<Product> {
//         const newProduct = this.productRepository.create(product);
//         newProduct.manufacturer = manufacturer;
//         newProduct.category = category;
//         await this.productRepository.save(newProduct);
//         return newProduct;
//     }
//
//     async updateProduct(id : number, product : UpdateProductDTO, manufacturer: Manufacturer, category: Category) : Promise<Product>{
//         const newProduct = await this.productRepository.preload({
//             id,
//             ...product
//         });
//         if(! newProduct) {
//             throw new NotFoundException(`Le product d'id ${id} n'existe pas`);
//         }
//         if (manufacturer)
//             newProduct.manufacturer=manufacturer;
//         if (category)
//             newProduct.category=category;
//         return await this.productRepository.save(newProduct);
//
//     }
//     //delete
//     //soft delete
//     //restore
//     //find product by criteria (id/ category / man)
// }
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Product} from "./entities/product.entity";

class CreateProductDto {
}

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) {}

    async createProduct(createProductDto: CreateProductDto): Promise<Product> {
        const product = this.productRepository.create(createProductDto);
        return this.productRepository.save(product);
    }

    async getProductById(id: string): Promise<Product> {
        const product = await this.productRepository.findOne(id, { relations: ['category', 'manufacturer', 'reviews'] });
        if (!product) {
            throw new NotFoundException('Product not found');
        }
        return product;
    }

    async updateProduct(id: string, UpdateProductDto: updateProductDto): Promise<Product> {
        const product = await this.getProductById(id);
        this.productRepository.merge(product, updateProductDto);
        return this.productRepository.save(product);
    }

    async softDeleteProduct(id: string): Promise<void> {
        const product = await this.getProductById(id);
        product.isDeleted = new Date();
        await this.productRepository.save(product);
    }

    async deleteProduct(id: string): Promise<void> {
        const product = await this.getProductById(id);
        await this.productRepository.remove(product);
    }
}
