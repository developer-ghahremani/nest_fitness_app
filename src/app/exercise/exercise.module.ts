import { Exercise, ExerciseSchema } from './entities/exercise.entity';

import { ExerciseController } from './exercise.controller';
import { ExerciseService } from './exercise.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ExerciseController],
  providers: [ExerciseService],
  imports: [
    MongooseModule.forFeature([
      { name: Exercise.name, schema: ExerciseSchema },
    ]),
  ],
})
export class ExerciseModule {}
