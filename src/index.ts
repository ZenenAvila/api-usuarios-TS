import 'reflect-metadata';
import {createConnection} from 'typeorm';
import usuariosRoutes from './routes/usuarios.routes';
import {app} from "./routes/app";
createConnection();

//routes
app.use('/usuarios',usuariosRoutes); 