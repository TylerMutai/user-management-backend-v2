import { Module } from '@nestjs/common';
import { employeesProviders } from './employees.providers';
import { EmployeesService } from './employees.service';
import { DatabaseModule } from '../database/database.module';
import { EmployeesController } from './employees.controller';
import { userProviders } from '../users/users.providers';

@Module({
  imports: [DatabaseModule],
  providers: [EmployeesService, ...employeesProviders, ...userProviders],
  controllers: [EmployeesController],
})
export class EmployeesModule {}
