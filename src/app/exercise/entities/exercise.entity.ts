import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Exercise {
  @Prop()
  bodyPart: string;
  @Prop()
  equipment: string;
  @Prop()
  gifUrl: string;
  @Prop()
  id: string;
  @Prop()
  name: string;
  @Prop()
  target: string;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
