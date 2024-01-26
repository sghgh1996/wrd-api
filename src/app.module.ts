import { Module } from '@nestjs/common';
import { TravelsModule } from './travels/travels.module';

@Module({
  imports: [TravelsModule]
})
export class AppModule {}
