import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import {CreateManufacturerDto} from "./DTOs/CreateManufacturerDto";
import {UpdateManufacturerDto} from "./DTOs/UpdateManufacturerDto";


@Controller('manufacturers')
export class ManufacturerController {
    constructor(private readonly manufacturerService: ManufacturerService) {}

    @Post()
    createManufacturer(@Body() createManufacturerDto: CreateManufacturerDto) {
        return this.manufacturerService.createManufacturer(createManufacturerDto);
    }

    @Get(':id')
    getManufacturerById(@Param('id') id: string) {
        return this.manufacturerService.getManufacturerById(id);
    }

    @Patch(':id')
    updateManufacturer(@Param('id') id: string, @Body() updateManufacturerDto: UpdateManufacturerDto) {
        return this.manufacturerService.updateManufacturer(id, updateManufacturerDto);
    }

    @Delete(':id')
    deleteManufacturer(@Param('id') id: string) {
        return this.manufacturerService.deleteManufacturer(id);
    }
}

