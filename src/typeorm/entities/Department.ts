import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ModelTimestamp } from './ModelTimestamp';

@Entity()
export class Department extends ModelTimestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
