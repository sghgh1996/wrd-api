import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { CreateTravelDto } from './dto/create-travel.dto';
import { TravelInfoDto } from './dto/travel-info.dto';

import { mockTravels } from 'src/mock-data/travels';

@Controller('api/travels')
export class TravelsController {
  private travels: TravelInfoDto[] = mockTravels;

  @Get()
  getTravels() {
    return {
      message: 'Travels found successfully',
      status: 'ok',
      travels: this.travels
    };
  }

  @Get(':id')
  getTravel(@Param('id') id: string) {
    const travel = this.travels.find(t => t.id === id);

    if (!travel) {
      return {
        message: 'Travel not found',
        status: 'error',
        travel: null
      };
    }

    return {
      message: 'Travel found successfully',
      status: 'ok',
      travel
    };
  }
}

@Controller('api/my-travels')
export class MyTravelsController {
  private travels: TravelInfoDto[] = [mockTravels[2], mockTravels[5], mockTravels[7], mockTravels[12]];

  @Get()
  getMyTravels() {
    return {
      message: 'Travels found successfully',
      status: 'ok',
      travels: this.travels
    };
  }

  @Get(':id')
  getMyTravel(@Param('id') id: string) {
    const travel = this.travels.find(t => t.id === id);

    if (!travel) {
      return {
        message: 'Travel not found',
        status: 'error',
        travel: null
      };
    }

    return {
      message: 'Travel found successfully',
      status: 'ok',
      travel
    };
  }

  @Post()
  addTravel(@Body() travel: CreateTravelDto) {
    return {
      message: 'Travel created successfully',
      status: 'ok',
      travel: travel
    };
  }

  @Put(':id')
  editTravel(@Param('id') id: string, @Body() travel: CreateTravelDto) {
    return {
      message: 'Travel updated successfully',
      status: 'ok',
      travelId: id,
      travel: travel
    };
  }

  @Delete(':id')
  deleteTravel(@Param('id') id: string) {
    return {
      message: 'Travel deleted successfully',
      status: 'ok',
      travelId: id
    };
  }
}