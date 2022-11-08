import { Equipment, EquipmentSchema } from './entities/equipment.entity';

import { EquipmentController } from './equipment.controller';
import { EquipmentService } from './equipment.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [EquipmentController],
  providers: [EquipmentService],
  imports: [
    MongooseModule.forFeature([
      { name: Equipment.name, schema: EquipmentSchema },
    ]),
  ],
})
export class EquipmentModule {}
