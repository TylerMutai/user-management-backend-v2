import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ModelTimestamp } from '../typeorm/entities/modelTimestamp.entity';
import { EmployeesEntity } from '../employees/employees.entity';

@Entity({ name: 'user' })
export class UsersEntity extends ModelTimestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => EmployeesEntity)
  @JoinColumn()
  employeeProfile: EmployeesEntity;
}
