import { DataSource } from 'typeorm';
import { DATA_SOURCE, POSITIONS_REPOSITORY } from '../utils/constants';
import { PositionEntity } from './position.entity';

export const positionsProviders = [
  {
    provide: POSITIONS_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PositionEntity),
    inject: [DATA_SOURCE],
  },
];
