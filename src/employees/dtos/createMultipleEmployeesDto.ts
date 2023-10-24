import { CreateEmployeeDto } from './createEmployeeDto';
import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMultipleEmployeesDto {
  @ValidateNested({
    each: true,
  })
  @Type(() => CreateEmployeeDto)
  @IsArray()
  employees: CreateEmployeeDto[];
}
