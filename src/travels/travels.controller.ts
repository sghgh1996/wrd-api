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
    return this.travels;
  }

  @Get(':id')
  getTravel(@Param('id') id: string) {
    const travel = this.travels.find(t => t.id === id);

    if (!travel) {
      return { message: 'Travel not found' };
    }

    return travel;
  }

  @Post()
  addTravel(@Body() travel: CreateTravelDto) {
    // TODO: Implement logic to add a new travel
    return {
      message: 'Travel created successfully: ',
      travel: travel
    };
  }

  @Put(':id')
  editTravel(@Param('id') id: string, @Body() updatedTravel: UpdateTravelDto) {
    // TODO: Implement logic to edit a travel by ID
    return {
      message: 'Travel updated successfully: ',
      travelId: id,
      travel: updatedTravel
    };
  }

  @Delete(':id')
  deleteTravel(@Param('id') id: string) {
    // TODO: Implement logic to delete a travel by ID
    return {
      message: 'Travel deleted successfully: ',
      travelId: id
    };
  }
}
