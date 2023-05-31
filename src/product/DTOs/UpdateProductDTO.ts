import { PartialType } from '@nestjs/mapped-types';
import {CreateProductDto} from "./CreateProductDTO";

export class UpdateProductDto extends PartialType(CreateProductDto) {}
