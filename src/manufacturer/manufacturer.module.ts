import { Module } from '@nestjs/common';
import { ManufacturerController } from './manufacturer.controller';
import { ManufacturerService } from './manufacturer.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Category} from "../category/entities/category.entity";
import {Manufacturer} from "./entities/manufacturer.entity";

@Module({
  imports : [TypeOrmModule.forFeature([Manufacturer])],
  controllers: [ManufacturerController],
  providers: [ManufacturerService]
})
export class ManufacturerModule {}
