import {Entity,PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import {Favorite} from "./Favorite";

@Entity()
export class Character extends BaseEntity {

    @PrimaryGeneratedColumn()
    CharacterID: number

    @Column()
    Name: string

    @Column()
    Height: number

    @Column()
    Mass: number

    @Column()
    HairColor: string

    @Column()
    SkinColor: string

    @Column()
    EyeColor: string

    @Column()
    BirthYear: string

    @Column()
    Gender: string

    @Column()
    Homeworld: string

    @Column()
    ImgUrl: string

    @ManyToOne(() => Favorite, favorite => favorite.characters)
    favorite: Favorite;
}
