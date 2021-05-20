import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable
  } from 'typeorm';
import { Favorite } from './Favorite';
  
@Entity()
export class User extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    UserID: number;
  
    @Column()
    Name: string;
  
    @Column()
    LastName: string;
  
    @Column({unique: true})
    Email: string;
  
    @Column({unique: true})
    Password: string;
  }