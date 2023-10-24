import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ModelTimestamp } from './ModelTimestamp';
import { EmployeeProfile } from './EmployeeProfile';

@Entity()
export class Team extends ModelTimestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 'pending' })
  status: string;

  @ManyToMany(() => EmployeeProfile, (employeeProfile) => employeeProfile.teams)
  employeeProfiles: EmployeeProfile[];
}
