import {app} from "./routes/app";
const usuariosRoutes=require('./routes/usuariosRoutes');

app.use('/usuarios',usuariosRoutes); 

// import express from 'express';

// const app    = express();

// app.get('/',(req,res)=>{
//     res.send('Hello');
// });

// app.listen(5000,()=> console.log('api corriendo'));