import { Module } from '@nestjs/common';
import { positionsProviders } from './positions.providers';
import { PositionsController } from './positions.controller';
import { PositionsService } from './positions.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...positionsProviders, PositionsService],
  controllers: [PositionsController],
})
export class PositionsModule {}
