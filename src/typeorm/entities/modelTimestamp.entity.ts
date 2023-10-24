import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class ModelTimestamp {
  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
