import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ModelTimestamp } from '../typeorm/entities/modelTimestamp.entity';
import { EmployeesEntity } from '../users/employees/employees.entity';

@Entity({ name: 'team' })
export class TeamEntity extends ModelTimestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 'pending' })
  status: string;

  @ManyToMany(() => EmployeesEntity, (employeeProfile) => employeeProfile.teams)
  employeeProfiles: EmployeesEntity[];
}
