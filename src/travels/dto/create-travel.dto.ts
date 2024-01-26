import { IsString, IsDate, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTravelDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsDate()
  departureDate: Date;

  @IsNotEmpty()
  @IsDate()
  returnDate: Date;

  @IsOptional()
  @IsString()
  imageUrl: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
