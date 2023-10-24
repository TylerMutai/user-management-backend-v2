import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ModelTimestamp } from '../typeorm/entities/modelTimestamp.entity';
import { DepartmentEntity } from '../departments/department.entity';
import { PositionEntity } from '../positions/position.entity';
import { TeamEntity } from '../teams/team.entity';
import { UsersEntity } from '../users/users.entity';

@Entity({ name: 'employee_profile' })
export class EmployeesEntity extends ModelTimestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UsersEntity, (user) => user.employeeProfile, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn()
  user: UsersEntity;

  @ManyToOne(() => DepartmentEntity, (department) => department.employees, {
    eager: true,
  })
  @JoinColumn()
  department: DepartmentEntity;

  @Column()
  departmentId: number;

  @ManyToOne(() => PositionEntity, (position) => position.employees, {
    eager: true,
  })
  @JoinColumn()
  position: PositionEntity;

  @Column()
  positionId: number;

  @ManyToMany(() => TeamEntity, {
    eager: true,
  })
  @JoinTable()
  teams: TeamEntity[];
}
