import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { TravelInfoDto } from './dto/travel-info.dto';

import { mockTravels } from 'src/mock-data/travels';

@Controller('api/travels')
export class TravelsController {
  private travels: TravelInfoDto[] = mockTravels;

  @Get()
  getTravels() {
    return {
      message: 'Travels found successfully: ',
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
      message: 'Travel found successfully: ',
      status: 'ok',
      travel
    };
  }

  @Post()
  addTravel(@Body() travel: CreateTravelDto) {
    // TODO: Implement logic to add a new travel
    return {
      message: 'Travel created successfully: ',
      status: 'ok',
      travel: travel
    };
  }

  @Put(':id')
  editTravel(@Param('id') id: string, @Body() updatedTravel: UpdateTravelDto) {
    // TODO: Implement logic to edit a travel by ID
    return {
      message: 'Travel updated successfully: ',
      status: 'ok',
      travelId: id,
      travel: updatedTravel
    };
  }

  @Delete(':id')
  deleteTravel(@Param('id') id: string) {
    // TODO: Implement logic to delete a travel by ID
    return {
      message: 'Travel deleted successfully: ',
      status: 'ok',
      travelId: id
    };
  }
}
