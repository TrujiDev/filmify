import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  summary: string;

  @Column({ type: 'decimal', precision: 2, scale: 1 })
  rating: number;

  @Column()
  category: string;

  @Column()
  image: string;

  @Column({ default: false })
  isDeleted: boolean;
}
