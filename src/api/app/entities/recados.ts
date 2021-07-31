import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";


@Entity()
export class recados{

@PrimaryGeneratedColumn("uuid")
id: string;

@Column()
title: string;

@Column()
message: string;

}