import { Controller, Get, Post, Param, Query } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { GetExercise } from './dto/get-exercise.dto';

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Post()
  create() {
    return this.exerciseService.create();
  }

  @Get()
  findAll(@Query() query: GetExercise) {
    return this.exerciseService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciseService.findOne(id);
  }
}
