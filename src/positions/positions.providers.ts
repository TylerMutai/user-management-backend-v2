import { DataSource } from 'typeorm';
import { MysqlDataSource } from '../datasource';
import { DATA_SOURCE } from '../utils/constants';

export const positionsProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource(MysqlDataSource as any);
      return dataSource.initialize();
    },
  },
];
