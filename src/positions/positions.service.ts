import { Inject, Injectable } from '@nestjs/common';
import { POSITIONS_REPOSITORY } from '../utils/constants';
import { Repository } from 'typeorm';
import { CreateDepartmentParams } from '../utils/types/department';
import { PositionEntity } from './position.entity';

@Injectable()
export class PositionsService {
  constructor(
    @Inject(POSITIONS_REPOSITORY)
    private positionEntityRepository: Repository<PositionEntity>,
  ) {}

  getAll() {
    return this.positionEntityRepository.find();
  }

  create(departmentDetails: CreateDepartmentParams) {
    const user = this.positionEntityRepository.create(departmentDetails);
    return this.positionEntityRepository.save(user);
  }
}
