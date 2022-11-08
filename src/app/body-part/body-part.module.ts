import { BodyPart, BodyPartSchema } from './entities/body-part.entity';

import { BodyPartController } from './body-part.controller';
import { BodyPartService } from './body-part.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [BodyPartController],
  providers: [BodyPartService],
  imports: [
    MongooseModule.forFeature([
      { name: BodyPart.name, schema: BodyPartSchema },
    ]),
  ],
})
export class BodyPartModule {}
