import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import mongoose from 'mongoose';

@Schema()
export class BodyPart {
  @Prop()
  title: string;
}

export const BodyPartSchema = SchemaFactory.createForClass(BodyPart);
