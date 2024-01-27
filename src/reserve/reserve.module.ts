import { Module } from '@nestjs/common';
import { ReserveController } from './reserve.controller';

@Module({
  controllers: [ReserveController]
})
export class ReserveModule {}
