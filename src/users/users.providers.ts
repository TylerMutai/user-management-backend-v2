import { DataSource } from 'typeorm';
import { UsersEntity } from './users.entity';
import { DATA_SOURCE, USERS_REPOSITORY } from '../utils/constants';

export const userProviders = [
  {
    provide: USERS_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UsersEntity),
    inject: [DATA_SOURCE],
  },
];
