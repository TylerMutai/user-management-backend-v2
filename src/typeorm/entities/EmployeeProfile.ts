import {
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ModelTimestamp } from './ModelTimestamp';
import { Department } from './Department';
import { Position } from './Position';
import { Team } from './Team';

@Entity()
export class EmployeeProfile extends ModelTimestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Department)
  @JoinColumn()
  department: Department;

  @OneToOne(() => Position)
  @JoinColumn()
  position: Position;

  @ManyToMany(() => Team, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  @JoinTable()
  teams: Team[];
}
