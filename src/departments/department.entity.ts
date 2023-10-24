import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ModelTimestamp } from '../typeorm/entities/modelTimestamp.entity';
import { EmployeesEntity } from '../employees/employees.entity';

@Entity({ name: 'department' })
export class DepartmentEntity extends ModelTimestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => EmployeesEntity, (employee) => employee.department)
  employees: EmployeesEntity[];
}
