import {
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ModelTimestamp } from '../typeorm/entities/modelTimestamp.entity';
import { DepartmentEntity } from '../departments/department.entity';
import { PositionEntity } from '../positions/position.entity';
import { TeamEntity } from '../teams/team.entity';

@Entity({ name: 'employee_profile' })
export class EmployeesEntity extends ModelTimestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => DepartmentEntity, {
    eager: true,
  })
  @JoinColumn()
  department: DepartmentEntity;

  @OneToOne(() => PositionEntity, {
    eager: true,
  })
  @JoinColumn()
  position: PositionEntity;

  @ManyToMany(() => TeamEntity, {
    onDelete: 'CASCADE',
    cascade: true,
    eager: true,
  })
  @JoinTable()
  teams: TeamEntity[];
}
