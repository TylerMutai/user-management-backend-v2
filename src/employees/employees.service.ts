import { Inject, Injectable } from '@nestjs/common';
import { EMPLOYEES_REPOSITORY, USERS_REPOSITORY } from '../utils/constants';
import { In, Repository } from 'typeorm';
import { EmployeesEntity } from './employees.entity';
import {
  CreateUserEmployeeProfileParams,
  UpdateUserEmployeeProfileParams,
  UserEmployeeProfileParams,
} from '../utils/types/user';
import { UsersEntity } from '../users/users.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @Inject(EMPLOYEES_REPOSITORY)
    private employeesEntityRepository: Repository<EmployeesEntity>,
    @Inject(USERS_REPOSITORY)
    private usersEntityRepository: Repository<UsersEntity>,
  ) {}

  private async getUsers(
    userEmployeeDetailsArray: UserEmployeeProfileParams[],
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

    return {
      users,
      employeeDetails,
    };
  }

  // TODO: @Baly update this to use an efficient Query.
  async createMany(
    userEmployeeDetailsArray: CreateUserEmployeeProfileParams[],
  ) {
    const { users, employeeDetails } = await this.getUsers(
      userEmployeeDetailsArray,
    );

    for (const user of users) {
      const cuParams = employeeDetails.get(user.id);
      user.employeeProfile = this.employeesEntityRepository.create(cuParams);
    }

    return this.usersEntityRepository.save(users);
  }

  // TODO: @Baly update this to use an efficient Query.
  async updateMany(
    userEmployeeDetailsArray: UpdateUserEmployeeProfileParams[],
  ) {
    const { users, employeeDetails } = await this.getUsers(
      userEmployeeDetailsArray,
    );

    for (const user of users) {
      const cuParams = employeeDetails.get(user.id);
      const position = user.employeeProfile.position;
      const department = user.employeeProfile.department;
      position.id = cuParams.positionId;
      department.id = cuParams.departmentId;
      user.employeeProfile = this.employeesEntityRepository.merge(
        user.employeeProfile,
        {
          positionId: cuParams.positionId,
          departmentId: cuParams.departmentId,
          position: position,
          department: department,
        },
      );
    }

    return this.usersEntityRepository.save(users);
  }

  delete() {}
}
