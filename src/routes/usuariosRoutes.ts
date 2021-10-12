import express,{Application, Request,Response,NextFunction} from 'express';
const router: Application=express();
const usuariosController=require('../controllers/usuariosController');

router.get("/mostrartodos",async(request:Request,response:Response)=>{
    try{
        const usuarios=await usuariosController.mostrarTodosCntrlr();
        response.json(usuarios);
    } catch(error){
        console.log(`error mostrartodos(routers): ${error}`);
    }
     
});

router.get("/mostrar",async(request,response)=>{
    try{
        const usuarios=await usuariosController.mostrarCntrlr();
        response.json(usuarios);
    } catch(error){
        console.log(`error mostrar(routers): ${error}`);
    }
     
});

//insertar usuariosn
router.post('/insertar',async(request,response)=>{
    try{    
        const usuarios=await usuariosController.insertarCntrlr(
            request.body.nombre,request.body.apellidos,
            request.body.password);
        response.json(usuarios);
    } catch(error){
        console.log(`error insertar(routers): ${error}`);
    }
});

router.post('/actualizar',async(request,response)=>{
    try{    
        const usuarios=await usuariosController.actualizarCntrlr(
            request.body.id,request.body.nombre,
            request.body.apellidos,request.body.password);
        response.json(usuarios);
    } catch(error){
        console.log(`error actualizar(routers): ${error}`);
    }
});
 
router.post('/eliminar',async(request,response)=>{
    try{    
        const usuarios=await usuariosController.eliminarCntrlr(
            request.body.id);
        response.json(usuarios);
    } catch(error){
        console.log(`error eliminar(routers): ${error}`);
    }
});


module.exports=router;