import { Module } from '@nestjs/common';
import { MyTravelsController, TravelsController } from './travels.controller';

@Module({
  controllers: [TravelsController, MyTravelsController]
})
export class TravelsModule {}
