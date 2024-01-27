import { IsString, IsDate, IsNumber, IsNotEmpty } from 'class-validator';

export class TravelInfoDto {
  @IsNotEmpty()
  @IsString()
  id: string;
  
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsDate()
  departureDate: string;

  @IsNotEmpty()
  @IsDate()
  returnDate: string;

  @IsNotEmpty()
  @IsString()
  imageUrl: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  averageRating: number;
}
