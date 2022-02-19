import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Companies {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
}
