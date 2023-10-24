import { Module } from '@nestjs/common';
import { teamsProviders } from './teams.providers';

@Module({
  providers: [...teamsProviders],
})
export class TeamsModule {}
