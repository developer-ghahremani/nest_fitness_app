import { BodyPart } from './entities/body-part.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

@Injectable()
export class BodyPartService {
  constructor(
    @InjectModel(BodyPart.name)
    private readonly bodyPartSchema: Model<BodyPart>,
  ) {}

  async create() {
    // const bodyPart = await this.bodyPartSchema.insertMany(
    //   bParts.map((item) => ({ title: item })),
    // );
    return 'Code is Commented';
  }

  async findAll() {
    const bodyParts = await this.bodyPartSchema.find();
    return bodyParts;
  }
}
