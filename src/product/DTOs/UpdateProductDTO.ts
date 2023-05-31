import { PartialType } from '@nestjs/mapped-types';
import {AddProductDTO} from "./CreateProductDTO";

export class UpdateProductDTO extends PartialType(AddProductDTO) {}
