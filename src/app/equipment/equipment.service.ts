import { Equipment } from './entities/equipment.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectModel(Equipment.name)
    private readonly equipmentSchema: Model<Equipment>,
  ) {}

  async create() {
    // const eqs = await this.equipmentSchema.insertMany(
    //   equipments.map((item) => ({ title: item })),
    // );
    return 'Will create';
  }

  async findAll() {
    const equipments = await this.equipmentSchema.find();
    return equipments;
  }
}
