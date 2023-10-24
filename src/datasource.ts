import { UsersEntity } from './users/users.entity';
import { DepartmentEntity } from './departments/department.entity';
import { EmployeesEntity } from './employees/employees.entity';
import { PositionEntity } from './positions/position.entity';
import { TeamEntity } from './teams/team.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Migrations1698151737574 } from './typeorm/migrations/1698151737574-migrations';
import { Migrations1698165099749 } from './typeorm/migrations/1698165099749-migrations';
import { Migrations1698167495187 } from './typeorm/migrations/1698167495187-migrations';

const MysqlDataSource: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'phpmyadmin',
  password: 'phpmyadmin',
  database: 'user-management-backend-v2',
  logging: true,
  entities: [
    UsersEntity,
    DepartmentEntity,
    EmployeesEntity,
    PositionEntity,
    TeamEntity,
  ],
  migrations: [
    Migrations1698151737574,
    Migrations1698165099749,
    Migrations1698167495187,
  ],
  synchronize: false,
};

const TypeORMDatasource = new DataSource(MysqlDataSource as any);

export { TypeORMDatasource, MysqlDataSource };
