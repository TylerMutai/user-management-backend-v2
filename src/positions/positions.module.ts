import { Module } from '@nestjs/common';
import { positionsProviders } from './positions.providers';

@Module({
  providers: [...positionsProviders],
})
export class PositionsModule {}
