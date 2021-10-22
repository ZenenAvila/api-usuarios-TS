////////////  Requerimientos ////////////
import { pool } from '../db/conection';


const mostrarTodosDao = async () =>{
    try{
        const usuarios = await pool.query(`select * from usuarios 
        order by id asc;`);
        return usuarios.rows;

    } catch (error){
        console.log(`error mostrarTodos(dao): ${error}`);
    }
}

const mostrarDao = async () =>{
    try{
        const usuarios = await pool.query(`select id,nombre, 
        apellidos,password from usuarios where eliminado=false 
        order by id asc;`);
        return usuarios.rows;

    } catch (error){
        console.log(`error mostrar(dao): ${error}`);
    }
}

const insertarDao =async (nombre:string,apellidos:string,password:string) =>{
    try{
        await pool.query(`insert into usuarios
        (nombre,apellidos,password)
                values('${nombre}',
                       '${apellidos}',
                       '${btoa(password)}');`);
    }
    catch(error)
    {
        console.log(`error insertar(dao): ${error}`);
    }
}

const eliminarDao = async(id:string)=>{
    try{
        await pool.query(`update usuarios set eliminado=true 
        where id =${id}`);
    
    } catch(error)
    {
        console.log(`error eliminar(dao): ${error}`);    
    }
}

const actualizarDao = async(id:string,nombre:string,apellidos:string,password:string)=>{
    try{
        await pool.query(`update usuarios 
                set nombre='${nombre}',
                    apellidos='${apellidos}',
                    password = '${btoa(password)}'
                    where id=${id}`);
    }catch(error)
    {
        console.log(`error actualizar(dao): ${error}`);    
    }
}

// module.exports={mostrarTodosDao,mostrarDao,insertarDao,eliminarDao,actualizarDao};