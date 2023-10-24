import {
  Column,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ModelTimestamp } from '../typeorm/entities/modelTimestamp.entity';
import { EmployeesEntity } from '../employees/employees.entity';

@Entity({ name: 'position' })
export class PositionEntity extends ModelTimestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Generated('increment')
  rank: number;

  @OneToMany(() => EmployeesEntity, (employee) => employee.position)
  employees: EmployeesEntity[];
}
