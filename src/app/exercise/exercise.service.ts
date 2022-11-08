import { Exercise } from './entities/exercise.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { GetExercise } from './dto/get-exercise.dto';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectModel(Exercise.name)
    private readonly exerciseSource: Model<Exercise>,
  ) {}

  async create() {
    // await this.exerciseSource.insertMany(exercises);
    return 'Will create';
  }

  async findAll(query: GetExercise) {
    const option: any = {};
    const { bodyPart, equipment, limit = 10, page = 1 } = query;
    if (bodyPart) option.bodyPart = bodyPart;
    if (equipment) option.equipment = equipment;
    const exercises = await this.exerciseSource.find(option, null, {
      limit: limit > 50 ? 50 : 10,
      skip: (page - 1) * limit,
    });
    return exercises;
  }

  async findOne(id: string) {
    const exercise = await this.exerciseSource.findOne({ id });
    return exercise;
  }
}
