import { Body, Controller, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateMultipleEmployeesDto } from './dtos/createMultipleEmployeesDto';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Post('many')
  createMany(@Body() createEmployeesDto: CreateMultipleEmployeesDto) {
    return this.employeesService.createMany(createEmployeesDto.employees);
  }
}
