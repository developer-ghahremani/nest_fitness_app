import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Equipment {
  @Prop()
  title: string;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
