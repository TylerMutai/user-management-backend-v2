import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UpdateEmployeeDto } from './updateEmployeeDto';

export class UpdateMultipleEmployeesDto {
  @ValidateNested({
    each: true,
  })
  @Type(() => UpdateEmployeeDto)
  @IsArray()
  employees: UpdateEmployeeDto[];
}
