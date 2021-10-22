import {EntityRepository, Repository} from "typeorm";
import {Usuarios} from "../dao/usuarios.Dao";

@EntityRepository(Usuarios)
export class UserRepository extends Repository<Usuarios> {    
    
    findd() {        
        return this.find();
        }}