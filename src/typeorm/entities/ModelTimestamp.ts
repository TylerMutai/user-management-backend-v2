import { CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity()
export abstract class ModelTimestamp {
  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
