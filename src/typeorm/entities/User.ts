import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ModelTimestamp } from './ModelTimestamp';
import { EmployeeProfile } from './EmployeeProfile';

@Entity()
export class User extends ModelTimestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => EmployeeProfile)
  @JoinColumn()
  employeeProfile: EmployeeProfile;
}
