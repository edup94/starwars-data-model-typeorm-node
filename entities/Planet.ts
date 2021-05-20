import {Entity,PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import {Favorite} from "./Favorite";

@Entity()
export class Planet extends BaseEntity {

    @PrimaryGeneratedColumn()
    PlanetID: number

    @Column()
    Name: string

    @Column()
    Diameter: number

    @Column()
    RotationPeriod: number

    @Column()
    Gravity: number

    @Column()
    Population: number

    @Column()
    Climate: string

    @Column()
    Terrain: string

    @Column()
    SurfaceWater: number

    @Column()
    ImgUrl: string

    @ManyToOne(() => Favorite, favorite => favorite.planets)
    favorite: Favorite;

}