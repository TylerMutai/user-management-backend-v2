import { Inject, Injectable } from '@nestjs/common';
import { EMPLOYEES_REPOSITORY, USERS_REPOSITORY } from '../utils/constants';
import { In, Repository } from 'typeorm';
import { EmployeesEntity } from './employees.entity';
import { CreateUserEmployeeProfileParams } from '../utils/types/user';
import { UsersEntity } from '../users/users.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @Inject(EMPLOYEES_REPOSITORY)
    private employeesEntityRepository: Repository<EmployeesEntity>,
    @Inject(USERS_REPOSITORY)
    private usersEntityRepository: Repository<UsersEntity>,
  ) {}

  async createMany(
    userEmployeeDetailsArray: CreateUserEmployeeProfileParams[],
  ) {
    const userIds = new Set<number>();
    const employeeDetails = new Map<number, CreateUserEmployeeProfileParams>();
    for (const u of userEmployeeDetailsArray) {
      userIds.add(u.userId);
      employeeDetails.set(u.userId, u);
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
