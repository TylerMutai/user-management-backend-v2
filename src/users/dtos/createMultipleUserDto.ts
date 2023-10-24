import { CreateUserDto } from './createUserDto';
import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMultipleUserDto {
  @ValidateNested({
    each: true,
  })
  @Type(() => CreateUserDto)
  @IsArray()
  users: CreateUserDto[];
}
