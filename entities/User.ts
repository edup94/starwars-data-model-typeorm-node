import {Entity, Column, PrimaryGeneratedColumn,BaseEntity, ManyToMany, JoinTable} from 'typeorm';
import { Planet } from './Planet';
import { Character } from './Character';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Name: string;

    @Column()
    LastName: string;

    @Column({ unique: true })
    Email: string;

    @Column({ unique: true })
    Password: string;

    @ManyToMany(() => Planet)
    @JoinTable()
    planets: Planet[];

    @ManyToMany(() => Character)
    @JoinTable()
    characters: Character[];
}