import { PartialType } from '@nestjs/mapped-types';
import {AddProductDTO} from "./addProductDTO";

export class UpdateProductDTO extends PartialType(AddProductDTO) {}
