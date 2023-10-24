import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PositionsModule } from './positions/positions.module';
import { DepartmentsModule } from './departments/departments.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlDataSource } from './datasource';
import { DatabaseModule } from './database/database.module';
import { TeamsModule } from './teams/teams.module';
import { EmployeesModule } from './users/employees/employees.module';

@Module({
  controllers: [AppController],
  imports: [
    PositionsModule,
    DepartmentsModule,
    UsersModule,
    TypeOrmModule.forRoot(MysqlDataSource),
    DatabaseModule,
    TeamsModule,
    EmployeesModule,
  ],
  providers: [AppService],
})
export class AppModule {}
