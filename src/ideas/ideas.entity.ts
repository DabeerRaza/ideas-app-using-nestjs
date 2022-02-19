import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ideas {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
}
