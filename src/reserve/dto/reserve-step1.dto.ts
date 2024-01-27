import { IsString, IsNotEmpty } from 'class-validator';

export class ReserveStep1Dto {
  @IsNotEmpty()
  @IsString()
  travelId: string;
}
