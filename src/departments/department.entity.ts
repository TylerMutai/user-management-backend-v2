import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ModelTimestamp } from '../typeorm/entities/modelTimestamp.entity';

@Entity({ name: 'department' })
export class DepartmentEntity extends ModelTimestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
