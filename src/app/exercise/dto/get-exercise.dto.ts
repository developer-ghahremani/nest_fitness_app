import { IsNumberString, IsOptional } from 'class-validator';

import { isStringObject } from 'util/types';

export class GetExercise {
  @IsOptional()
  bodyPart?: string;

  @IsOptional()
  equipment?: string;

  @IsOptional()
  @IsNumberString()
  page?: number;

  @IsOptional()
  @IsNumberString()
  limit?: number;
}
