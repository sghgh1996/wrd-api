import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class ReserveStep3Dto {
  @IsNotEmpty()
  @IsString()
  reserveId: string;

  @IsNotEmpty()
  @IsString()
  paymentType: string;

  @IsOptional()
  @IsString()
  notes: string;
}
