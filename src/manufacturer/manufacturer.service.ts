import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Manufacturer} from "./entities/manufacturer.entity";
import {CreateManufacturerDto} from "./DTOs/CreateManufacturerDto";


class UpdateManufacturerDto {
}

@Injectable()
export class ManufacturerService {
    constructor(
        @InjectRepository(Manufacturer)
        private manufacturerRepository: Repository<Manufacturer>,
    ) {}

    async createManufacturer(createManufacturerDto: CreateManufacturerDto): Promise<Manufacturer> {
        const manufacturer = this.manufacturerRepository.create(createManufacturerDto);
        return this.manufacturerRepository.save(manufacturer);
    }

    async getManufacturerById(id: string): Promise<Manufacturer> {
        const manufacturer = await this.manufacturerRepository.findOne(id, { relations: ['products'] });
        if (!manufacturer) {
            throw new NotFoundException('Manufacturer not found');
        }
        return manufacturer;
    }

    async updateManufacturer(id: string, UpdateManufacturerDto: UpdateManufacturerDto): Promise<Manufacturer> {
        const manufacturer = await this.getManufacturerById(id);
        this.manufacturerRepository.merge(manufacturer, updateManufacturerDto);
        return this.manufacturerRepository.save(manufacturer);
    }

    async softDeleteManufacturer(id: string): Promise<void> {
        const manufacturer = await this.getManufacturerById(id);
        manufacturer.isDeleted = new Date();
        await this.manufacturerRepository.save(manufacturer);
    }

    async deleteManufacturer(id: string): Promise<void> {
        const manufacturer = await this.getManufacturerById(id);
        await this.manufacturerRepository.remove(manufacturer);
    }
}