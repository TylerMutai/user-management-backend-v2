import { Inject, Injectable } from '@nestjs/common';
import { USERS_REPOSITORY } from '../utils/constants';
import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';
import { CreateUserParams, GetOneUserParams } from '../utils/types/user';
import { FilterOperator, paginate, PaginateQuery } from 'nestjs-paginate';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private usersEntityRepository: Repository<UsersEntity>,
  ) {}

  getAll(query: PaginateQuery) {
    return paginate(query, this.usersEntityRepository, {
      relations: {
        employeeProfile: {
          department: true,
          position: true,
          teams: true,
        },
      },
      sortableColumns: [
        'id',
        'name',
        'employeeProfile.department.name',
        'employeeProfile.position.name',
        'employeeProfile.position.rank',
      ],
      defaultSortBy: [['id', 'DESC']],
      searchableColumns: [
        'name',
        'employeeProfile.department.name',
        'employeeProfile.position.name',
      ],
      filterableColumns: {
        'employeeProfile.department.id': [FilterOperator.EQ],
        'employeeProfile.position.id': [FilterOperator.EQ],
      },
    });
  }

  getOne(userId: GetOneUserParams) {
    return this.usersEntityRepository.findOneOrFail({
      where: {
        id: userId.id,
      },
    });
  }

  create(userDetails: CreateUserParams) {
    const user = this.usersEntityRepository.create(userDetails);
    return this.usersEntityRepository.save(user);
  }

  async createAll(userDetailsArray: CreateUserParams[]) {
    const usersDT = this.usersEntityRepository.create(userDetailsArray);
    const users = await this.usersEntityRepository.save(usersDT);
    return this.usersEntityRepository.save(users);
  }

  update() {}

  delete() {}
}
