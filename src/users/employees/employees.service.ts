import { Inject, Injectable } from '@nestjs/common';
import { EMPLOYEES_REPOSITORY } from '../../utils/constants';
import { In, Repository } from 'typeorm';
import { EmployeesEntity } from './employees.entity';
import { CreateUserEmployeeProfileParams } from '../../utils/types/user';
import { UsersEntity } from '../users.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @Inject(EMPLOYEES_REPOSITORY)
    private employeesEntityRepository: Repository<EmployeesEntity>,
    @Inject(EMPLOYEES_REPOSITORY)
    private usersEntityRepository: Repository<UsersEntity>,
  ) {}

  async createOne(userEmployeeDetails: CreateUserEmployeeProfileParams) {
    const user = await this.usersEntityRepository.findOneOrFail({
      where: {
        id: userEmployeeDetails.user_id,
      },
    });
    user.employeeProfile =
      this.employeesEntityRepository.create(userEmployeeDetails);
    return this.employeesEntityRepository.save(user);
  }

  async createMany(
    userEmployeeDetailsArray: CreateUserEmployeeProfileParams[],
  ) {
    const userIds = new Set<number>();
    const employeeDetails = new Map<number, CreateUserEmployeeProfileParams>();
    for (const u of userEmployeeDetailsArray) {
      userIds.add(u.user_id);
      employeeDetails.set(u.user_id, u);
    }

    const users = await this.usersEntityRepository.find({
      where: {
        id: In(Array.from(userIds.values())),
      },
    });

    for (const user of users) {
      const cuParams = employeeDetails.get(user.id);
      user.employeeProfile = this.employeesEntityRepository.create(cuParams);
    }

    return this.usersEntityRepository.save(users);
  }

  update() {}

  delete() {}
}
