import { Module } from '@nestjs/common';
import { departmentsProviders } from './departments.providers';

@Module({
  providers: [...departmentsProviders],
})
export class DepartmentsModule {}
