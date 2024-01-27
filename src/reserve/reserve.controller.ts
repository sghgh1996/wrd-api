import { Controller, Post, Body } from '@nestjs/common';

import { ReserveStep1Dto } from './dto/reserve-step1.dto';
import { ReserveStep2Dto } from './dto/reserve-step2.dto';
import { ReserveStep3Dto } from './dto/reserve-step3.dto';

@Controller('api/reserve')
export class ReserveController {
  generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
  
    for (let i = 0; i < 5; i++) {
      id += characters[Math.floor(Math.random() * characters.length)];
    }
  
    return id;
  }

  @Post('step1')
  selectTravel(@Body() data: ReserveStep1Dto) {
    return {
      message: 'Reserve created successfully',
      status: 'ok',
      travelId: data.travelId,
      reserveId: 'reserve' + this.generateRandomId()
    };
  }

  @Post('step2')
  fillTravelerInfo(@Body() data: ReserveStep2Dto) {
    return {
      message: 'Customer info saved successfully',
      status: 'ok',
      reserveId: data.reserveId
    };
  }

  @Post('step3')
  selectPaymentType(@Body() data: ReserveStep3Dto) {
    return {
      message: 'Customer info saved successfully',
      status: 'ok',
      reserveId: data.reserveId
    };
  }
}
