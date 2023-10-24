import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDepartmentDto } from '../departments/dtos/createDepartmentDto';
import { PositionsService } from './positions.service';

@Controller('positions')
export class PositionsController {
  constructor(private positionsService: PositionsService) {}

  @Get()
  getAll() {
    return this.positionsService.getAll();
  }

  @Post('')
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.positionsService.create(createDepartmentDto);
  }
}
