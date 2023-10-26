import { Body, Controller, Patch, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateMultipleEmployeesDto } from './dtos/createMultipleEmployeesDto';
import { UpdateMultipleEmployeesDto } from './dtos/updateMultipleEmployeesDto';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Post('many')
  createMany(@Body() createEmployeesDto: CreateMultipleEmployeesDto) {
    return this.employeesService.createMany(createEmployeesDto.employees);
  }

  @Patch('many')
  updateMany(@Body() updateEmployeesDto: UpdateMultipleEmployeesDto) {
    return this.employeesService.updateMany(updateEmployeesDto.employees);
  }
}
