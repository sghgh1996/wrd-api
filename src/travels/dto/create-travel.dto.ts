import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTravelDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  departureDate: string;

  @IsNotEmpty()
  @IsString()
  returnDate: string;

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
