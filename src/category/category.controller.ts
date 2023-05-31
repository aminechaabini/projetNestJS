import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import {CreateCategoryDto} from "./DTOs/CreateCategoryDto";
import {UpdateCategoryDto} from "./DTOs/updateCategoryDto";


@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post()
    createCategory(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoryService.createCategory(createCategoryDto);
    }

    @Get(':id')
    getCategoryById(@Param('id') id: string) {
        return this.categoryService.getCategoryById(id);
    }

    @Patch(':id')
    updateCategory(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
        return this.categoryService.updateCategory(id, updateCategoryDto);
    }

    @Delete(':id')
    deleteCategory(@Param('id') id: string) {
        return this.categoryService.deleteCategory(id);
    }
}

