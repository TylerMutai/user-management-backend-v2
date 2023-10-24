import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEmployeeDto {
  @IsNumber()
  @IsNotEmpty()
  departmentId: number;
  @IsNumber()
  @IsNotEmpty()
  positionId: number;
  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
