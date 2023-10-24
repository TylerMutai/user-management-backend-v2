import { Module } from '@nestjs/common';
import { employeesProviders } from './employees.providers';

@Module({
  providers: [...employeesProviders],
})
export class EmployeesModule {}
