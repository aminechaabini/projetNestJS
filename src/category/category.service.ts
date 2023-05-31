import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Category} from "./entities/category.entity";
import {Repository} from "typeorm";
import {UpdateCategoryDto} from "./DTOs/updateCategoryDto";
import {CreateCategoryDto} from "./DTOs/CreateCategoryDto";

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>,
    ) {}

    async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const category = this.categoryRepository.create(createCategoryDto);
        return this.categoryRepository.save(category);
    }

    async getCategoryById(id: string): Promise<Category> {
        const category = await this.categoryRepository.findOneBy({id: id});
        if (!category) {
            throw new NotFoundException('Category not found');
        }
        return category;
    }

    async updateCategory(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
        const category = await this.getCategoryById(id);
        this.categoryRepository.merge(category, updateCategoryDto);
        return this.categoryRepository.save(category);
    }

    async softDeleteCategory(id: string) {
        const category = await this.getCategoryById(id);
        return await this.categoryRepository.softDelete(id);;
    }

    async deleteCategory(id: string): Promise<void> {
        const category = await this.getCategoryById(id);
        await this.categoryRepository.remove(category);
    }
}