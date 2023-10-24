import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/createUserDto';
import { GetOneUserDto } from './dtos/getOneUserDto';
import { Paginate, PaginateQuery } from 'nestjs-paginate';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAll(@Paginate() query: PaginateQuery) {
    return this.userService.getAll(query);
  }

  @Get(':id')
  getOne(@Param() getOneUserDto: GetOneUserDto) {
    return this.userService.getOne(getOneUserDto);
  }

  @Post('')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch(':id')
  updateOne() {}

  @Patch('bulk-update')
  updateMany() {}

  @Delete(':id')
  delete() {}

  @Delete('bulk-delete')
  deleteMany() {}
}
