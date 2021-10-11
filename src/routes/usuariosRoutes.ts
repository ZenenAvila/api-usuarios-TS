import express,{Application, Request,Response,NextFunction} from 'express';
const router: Application=express();
router.get("/hola",(request:Request,response:Response)=>{
    
        response.json("Hola");
     
});


module.exports=router;