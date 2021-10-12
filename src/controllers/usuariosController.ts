const usuariosDao=require(`../dao/usuariosDao`);

const numeros = new RegExp('^[0-9]+$');
const letras = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i');

//consultar usuarios
const mostrarTodosCntrlr =async()=>{
    try{
        const usuarios=await usuariosDao.mostrarTodosDao();
        return usuarios;
    } catch(error){
        console.log(`error mostrarTodos(controller): ${error}`);
    }
};

const mostrarCntrlr =async()=>{
    try{
        const usuarios=await usuariosDao.mostrarDao();
        return usuarios;
    } catch(error){
        console.log(`error mostrar(controller): ${error}`);
    }
};

//insertar usuariosn
const insertarCntrlr = async(nombre:string,apellidos:string,password:string)=>{
    try{
        if(nombre!="" && apellidos!="" && password!="")
        {
    if(letras.test(nombre) && letras.test(apellidos)
    ){
       await usuariosDao.insertarDao(nombre,apellidos,password);
        return({"respuesta":"insertado Correctamente"});
    }
    else{
        return({"respuesta":"El nombre y apellidos deben contener solo letras "});
    }
}else{
    return({"respuesta":"Todos los campos son obligatorios "});
    
}
    } catch(error){
        console.log(`error insertar(controller): ${error}`);
    }
};
 
const eliminarCntrlr =async(id:string)=>{
    try{
        if(id!="")
        {
    if(numeros.test(id)){
        await usuariosDao.eliminarDao(id);
        return ({"respuesta":"eliminado Correctamente"});

    } else{
        return({"respuesta":"El id solo debe contener numeros "});
    }
}else{
    return({"respuesta":"El id es obligatorio "});

}
}
catch(error)
{
    console.log(`error eliminar(controller): ${error}`);
}
};

const actualizarCntrlr=async(id:string,nombre:string,apellidos:string,password:string)=>{
    try{
        if(id!="" && nombre!="" && apellidos!="" && password!="" ){
    if(numeros.test(id)){    
    if(letras.test(nombre) && 
    letras.test(apellidos)){
    await usuariosDao.actualizarDao(id,nombre,apellidos,password)
        return({"respuesta":"actualizado Correctamente"});
}
else{
    return({"respuesta":"El nombre y apellidos deben contener solo letras "});
}
} else{
    return({"respuesta":"El id solo debe contener numeros "});
}}else{
    return({"respuesta":"Todos los campos son obligatorios "});
}}
catch(error)
{
    console.log(`error actualizar(controller): ${error}`);
    
}
};

module.exports={mostrarTodosCntrlr,mostrarCntrlr,insertarCntrlr,actualizarCntrlr,eliminarCntrlr};