import { Module } from '@nestjs/common';
import { TravelsModule } from './travels/travels.module';
import { ReserveModule } from './reserve/reserve.module';

@Module({
  imports: [TravelsModule, ReserveModule]
})
export class AppModule {}
