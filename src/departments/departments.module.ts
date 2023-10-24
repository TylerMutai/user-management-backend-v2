import { Module } from '@nestjs/common';
import { departmentsProviders } from './departments.providers';
import { DepartmentsController } from './departments.controller';
import { DepartmentsService } from './departments.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [DepartmentsService, ...departmentsProviders],
  controllers: [DepartmentsController],
})
export class DepartmentsModule {}
