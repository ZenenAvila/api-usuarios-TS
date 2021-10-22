import {Entity,Column,PrimaryGeneratedColumn, ColumnTypeUndefinedError} from 'typeorm';



@Entity()
    export class Usuarios{
        @PrimaryGeneratedColumn()
        id: number;

        @Column()
        nombre:string;

        @Column()
        apellidos:string;

        @Column()
        password:string;

        @Column()
        eliminado:boolean;
    }
