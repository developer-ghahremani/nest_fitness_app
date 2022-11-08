import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExerciseModule } from './app/exercise/exercise.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BodyPartModule } from './app/body-part/body-part.module';
import { EquipmentModule } from './app/equipment/equipment.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/fitness_app'),
    ExerciseModule,
    BodyPartModule,
    EquipmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
