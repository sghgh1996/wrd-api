import { Module } from '@nestjs/common';
import { TravelsController } from './travels.controller';

@Module({
  controllers: [TravelsController]
})
export class TravelsModule {}
