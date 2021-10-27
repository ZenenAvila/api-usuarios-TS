import { Request,Response } from "express";
import { getConnection, getRepository, } from "typeorm";
import { Usuarios } from "../dao/usuarios.Dao";

const numeros = new RegExp('^[0-9]+$');
const letras = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i');

export const mostrartodos = async (req:Request,res:Response): Promise<Response> =>{
    try{
        const users= await getRepository(Usuarios)
        .createQueryBuilder("usuario")
        .orderBy('id')
        .getMany()
        return res.json(users);
    }
    catch(error){
        console.log("error mostrarTodos(controller):",error);
        return res.json(`error mostrarTodos(controller): ${error}`);
    }
};

export const mostrar = async (req:Request,res:Response): Promise<Response> =>{
    try{
        const users= await getRepository(Usuarios)
        .createQueryBuilder()
        .select('id, nombre,apellidos,password')
        .where('eliminado=false') 
        .orderBy('id')
        .getRawMany()
        return res.json(users);
    }
    catch(error){
        console.log("error mostrar(controller):",error);
        return res.json(`error mostrar(controller): ${error}`);
    }
};


export const mostrarusuario = async (req:Request,res:Response): Promise<Response> =>{
    try{
        console.log(req.params.id);
        if(req.params.id!=""){
            if(numeros.test(req.params.id)){
                const results= await getRepository(Usuarios)
                .createQueryBuilder()
                .select('id, nombre,apellidos,password')
                .where(`eliminado=false and id=${req.params.id}` ) 
                .getRawMany()
                return res.json(results);
            } else{
                return res.json({"respuesta":"El id solo debe contener numeros "});
            }
        }else{
            return res.json({"respuesta":"El id es obligatorio "});
        }
    }
    catch(error){
        console.log("error mostrarusuario(controller):",error);
        return res.json(`error mostrarusuario(controller): ${error}`);
    }
};

export const insertar = async (req:Request,res:Response):  Promise<Response> =>{
    try {
        if(req.body.nombre!="" && req.body.apellidos!="" && 
        req.body.password!=""){
            if(letras.test(req.body.nombre) && letras.test(req.body.apellidos)){
                const results= await getRepository(Usuarios)
                .createQueryBuilder()
                .insert()
                .into(Usuarios)
                .values([
                    { nombre: ` ${String(req.body.nombre)} `, 
                      apellidos: `${req.body.apellidos}`,
                      password: `${req.body.password}` 
                    }
                ])
                .execute();
                return res.json(results);
            }else{
                return res.json({"respuesta":"El nombre y apellidos deben contener solo letras "});
            }
        }else{
            return res.json({"respuesta":"Todos los campos son obligatorios "});    
        } 
    } catch (error) {
        console.log("error insertar(controller):",error);
        return res.json(`error insertar(controller): ${error}`);    
    }
};


export const actualizar = async (req:Request,res:Response): Promise<Response> =>{
    try{
    const user = await getRepository(Usuarios).findOne(req.params.id);
    if(user){
        if(req.params.id!="" && req.body.nombre!="" && 
        req.body.apellidos!="" && req.body.password!="" ){
    if(numeros.test(req.params.id)){    
    if(letras.test(req.body.nombre) && 
    letras.test(req.body.apellidos)){
        const results= await getRepository(Usuarios)
        .createQueryBuilder()
        .update(Usuarios)
        .set({nombre:req.body.nombre,
            apellidos:req.body.apellidos,
            password:req.body.password})
        .where("id = :id", { id: req.params.id })
        .execute();
        return res.json(results);}
        else{
            return res.json({"respuesta":"El nombre y apellidos deben contener solo letras "});
        }
        } else{
            return res.json({"respuesta":"El id solo debe contener numeros "});
        }}else{
            return res.json({"respuesta":"Todos los campos son obligatorios "});
        }
    }else{
        return res.status(404).json({msg: 'Not User Found XD '});
    }
}
catch(error)
{
    console.log(`error actualizar(controller): ${error}`);
    return res.json(`error actualizar(controller): ${error}`);        
}
};

export const eliminar = async (req:Request,res:Response): Promise<Response> =>{
    try{
        if(req.params.id!=""){
            if(numeros.test(req.params.id)){
                const results= await getRepository(Usuarios)
                .createQueryBuilder()
                .update(Usuarios)
                .set({ eliminado: true })
                .where("id = :id", { id: req.body.id })
                .execute();
                return res.json(results);
            } else{
                return res.json({"respuesta":"El id solo debe contener numeros "});
            }
        }else{
            return res.json({"respuesta":"El id es obligatorio "});
        }
    }
    catch(error)
    {
        console.log(`error eliminar(controller): ${error}`);
        return res.json(`error eliminar(controller): ${error}`);    
    }
};

