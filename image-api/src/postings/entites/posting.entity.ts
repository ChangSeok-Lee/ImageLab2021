import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
//import {Photo} from '../photos/photo.entity';
@Entity()
export class Posting{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    content: string;

    @Column({ default: true})
    isActive: boolean;

    // @OneToMany(type => Photo, photo => photo.user)
    // photos: Photo[];
}