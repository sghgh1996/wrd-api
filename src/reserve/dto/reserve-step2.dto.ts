import { IsString, IsNotEmpty } from 'class-validator';

export class ReserveStep2Dto {
  @IsNotEmpty()
  @IsString()
  reserveId: string;

  @IsNotEmpty()
  @IsString()
  travelId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  age: string;

  @IsNotEmpty()
  @IsString()
  gender: string;
}
