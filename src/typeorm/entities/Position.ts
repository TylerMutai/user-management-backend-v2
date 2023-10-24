import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';
import { ModelTimestamp } from './ModelTimestamp';

@Entity()
export class Position extends ModelTimestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Generated('increment')
  rank: number;
}
