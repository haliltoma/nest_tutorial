import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column({ unique: true })
  name: string;
  @Column()
  password: string;
  @Column()
  email: string;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}
