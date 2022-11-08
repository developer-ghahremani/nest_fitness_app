import { Controller, Get, Post } from '@nestjs/common';

import { EquipmentService } from './equipment.service';

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post()
  create() {
    return this.equipmentService.create();
  }

  @Get()
  findAll() {
    return this.equipmentService.findAll();
  }
}
