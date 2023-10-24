import { DataSource } from 'typeorm';
import { DATA_SOURCE, DEPARTMENTS_REPOSITORY } from '../utils/constants';
import { DepartmentEntity } from './department.entity';

export const departmentsProviders = [
  {
    provide: DEPARTMENTS_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(DepartmentEntity),
    inject: [DATA_SOURCE],
  },
];
