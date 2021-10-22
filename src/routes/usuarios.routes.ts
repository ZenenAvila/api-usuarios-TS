import { Express, Router } from "express";
const router=Router();

import {mostrartodos,mostrar, mostrarusuario,insertar, eliminar, UpdateUser} from '../controllers/usuarios.controller';

router.get('/mostrartodos',mostrartodos);
router.get('/mostrar',mostrar);
router.get('/mostrarusuario/:id',mostrarusuario);
router.post('/insertar',insertar);
router.put('/actualizar/:id',UpdateUser);
router.delete('/eliminar/:id',eliminar);

export default router;
