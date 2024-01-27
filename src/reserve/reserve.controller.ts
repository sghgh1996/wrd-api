import { Controller, Post, Body, Get, Param } from '@nestjs/common';

import { ReserveStep1Dto } from './dto/reserve-step1.dto';
import { ReserveStep2Dto } from './dto/reserve-step2.dto';
import { ReserveStep3Dto } from './dto/reserve-step3.dto';
import { TravelInfoDto } from 'src/travels/dto/travel-info.dto';

import { mockTravels } from 'src/mock-data/travels';

@Controller('api/reserve')
export class ReserveController {
  private travels: TravelInfoDto[] = mockTravels;

  generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
  
    for (let i = 0; i < 5; i++) {
      id += characters[Math.floor(Math.random() * characters.length)];
    }
  
    return id;
  }

  findTravel(id: string): TravelInfoDto | boolean {
    const travel = this.travels.find(t => t.id === id);

    if (!travel) {
      return false;
    }

    return travel;
  }

  @Get(':id')
  getTravel(@Param('id') id: string) {
    const [travelId] = id.split('-');

    const travel = this.findTravel(travelId)

    if (!travel) {
      return {
        message: 'Reserve not found',
        status: 'error',
        travel: null
      };
    }

    return {
      message: 'Reserve found successfully',
      status: 'ok',
      travel
    };
  }

  @Post('step1')
  selectTravel(@Body() data: ReserveStep1Dto) {
    return {
      message: 'Reserve created successfully',
      status: 'ok',
      reserveId: `${data.travelId}-${this.generateRandomId()}`
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
