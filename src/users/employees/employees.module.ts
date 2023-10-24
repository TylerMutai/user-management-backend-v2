import { Module } from '@nestjs/common';
import { employeesProviders } from './employees.providers';
import { EmployeesService } from './employees.service';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [EmployeesService, ...employeesProviders],
})
export class EmployeesModule {}
