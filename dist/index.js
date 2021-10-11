"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./routes/app");
const usuariosRoutes = require('./routes/usuariosRoutes');
app_1.app.use('/usuarios', usuariosRoutes);
// import express from 'express';
// const app    = express();
// app.get('/',(req,res)=>{
//     res.send('Hello');
// });
// app.listen(5000,()=> console.log('api corriendo'));
