import express from 'express';
import 'reflect-metadata';
import {createConnection} from 'typeorm';
import usuariosRoutes from './routes/usuarios.routes';
import {app} from "./routes/app";
createConnection();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/usuarios',usuariosRoutes); 