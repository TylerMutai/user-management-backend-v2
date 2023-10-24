import { Inject, Injectable } from '@nestjs/common';
import { DEPARTMENTS_REPOSITORY } from '../utils/constants';
import { Repository } from 'typeorm';
import { DepartmentEntity } from './department.entity';
import { CreateDepartmentParams } from '../utils/types/department';

@Injectable()
export class DepartmentsService {
  constructor(
    @Inject(DEPARTMENTS_REPOSITORY)
    private departmentEntityRepository: Repository<DepartmentEntity>,
  ) {}

  getAll() {
    return this.departmentEntityRepository.find();
  }

  create(departmentDetails: CreateDepartmentParams) {
    const department =
      this.departmentEntityRepository.create(departmentDetails);
    return this.departmentEntityRepository.save(department);
  }
}
