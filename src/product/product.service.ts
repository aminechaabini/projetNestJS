import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Product} from "./entities/product.entity";
import {Manufacturer} from "../manufacturer/entities/manufacturer.entity";
import {AddProductDTO, } from "./DTOs/addProductDTO";
import {UpdateProductDTO} from "./DTOs/updateProductDTO";
import {Category} from "../category/entities/category.entity";



@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ) {
        super(productRepository);
    }

    // add product
    async addProduct(product: AddProductDTO, manufacturer: Manufacturer, category: Category): Promise<Product> {
        const newProduct = this.productRepository.create(product);
        newProduct.manufacturer = manufacturer;
        newProduct.category = category;
        await this.productRepository.save(newProduct);
        return newProduct;
    }

    async updateProduct(id : number, product : UpdateProductDTO, manufacturer: Manufacturer, category: Category) : Promise<Product>{
        const newProduct = await this.productRepository.preload({
            id,
            ...product
        });
        if(! newProduct) {
            throw new NotFoundException(`Le product d'id ${id} n'existe pas`);
        }
        if (manufacturer)
            newProduct.manufacturer=manufacturer;
        if (category)
            newProduct.category=category;
        return await this.productRepository.save(newProduct);

    }
    //delete
    //soft delete
    //restore
    //find product by criteria (id/ category / man)
}
