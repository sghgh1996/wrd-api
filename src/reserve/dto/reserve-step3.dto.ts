import { IsString, IsNotEmpty } from 'class-validator';

export class ReserveStep3Dto {
  @IsNotEmpty()
  @IsString()
  reserveId: string;

  @IsNotEmpty()
  @IsString()
  paymentType: string;

  @IsNotEmpty()
  @IsString()
  notes: string;
}
