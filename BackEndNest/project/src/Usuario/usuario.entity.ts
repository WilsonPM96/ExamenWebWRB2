import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {EquipoEntity} from "../Equipo/equipo.entity";

@Entity('usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 500 })
    nombre: string;

    @Column({ length: 500 })
    contrasena: string;

    @Column({ length: 2000 })
    urlImg: string;

    @OneToMany(
        type => EquipoEntity,
        comida => comida.usuarioId)
    equipos: EquipoEntity [];
}