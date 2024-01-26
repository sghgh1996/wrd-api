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
    // this.travels.push(travel);
    return travel;
  }

  @Put(':id')
  editTravel(@Param('id') id: string, @Body() updatedTravel: UpdateTravelDto) {
    // Implement logic to edit a travel by ID
    return updatedTravel;
  }

  @Delete(':id')
  deleteTravel(@Param('id') id: string) {
    // Implement logic to delete a travel by ID
    return { message: 'Travel deleted successfully: ' + id };
  }
}
