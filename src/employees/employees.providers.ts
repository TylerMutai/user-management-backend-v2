import { DataSource } from 'typeorm';
import { DATA_SOURCE, EMPLOYEES_REPOSITORY } from '../utils/constants';
import { EmployeesEntity } from './employees.entity';

export const employeesProviders = [
  {
    provide: EMPLOYEES_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(EmployeesEntity),
    inject: [DATA_SOURCE],
  },
];
