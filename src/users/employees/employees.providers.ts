import { DataSource } from 'typeorm';
import { DATA_SOURCE, EMPLOYEES_REPOSITORY } from '../../utils/constants';
import { UsersEntity } from '../users.entity';

export const employeesProviders = [
  {
    provide: EMPLOYEES_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UsersEntity),
    inject: [DATA_SOURCE],
  },
];
