import {Entity,PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany, JoinTable} from "typeorm";
import { Planet } from "./Planet";
import { Character } from "./Character";
import { User } from "./User";

@Entity()
export class Favorite extends BaseEntity {

    @PrimaryGeneratedColumn()
    FavoriteID: number

    @Column()
    UserID: number

    @Column({nullable: true})
    CharacterID: number

    @Column({nullable: true})
    PlanetID: number

    @OneToMany(() => Planet, planet => planet.favorite)
    planets: Favorite[];

    @OneToMany(() => Character, character => character.favorite)
    characters: Favorite[];

    @ManyToMany(() => User)
    @JoinTable()
    users: User[];
}