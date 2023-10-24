import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetOneUserDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
