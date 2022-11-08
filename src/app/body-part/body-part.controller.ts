import { Controller, Get, Post } from '@nestjs/common';

import { BodyPartService } from './body-part.service';

@Controller('body-part')
export class BodyPartController {
  constructor(private readonly bodyPartService: BodyPartService) {}

  @Post()
  create() {
    return this.bodyPartService.create();
  }

  @Get()
  findAll() {
    return this.bodyPartService.findAll();
  }
}
