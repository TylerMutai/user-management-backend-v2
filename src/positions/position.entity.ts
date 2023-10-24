import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';
import { ModelTimestamp } from '../typeorm/entities/modelTimestamp.entity';

@Entity({ name: 'position' })
export class PositionEntity extends ModelTimestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Generated('increment')
  rank: number;
}
