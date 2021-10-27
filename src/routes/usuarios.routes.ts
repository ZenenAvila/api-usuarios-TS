import {mostrartodos,mostrar, mostrarusuario,insertar, eliminar, actualizar} from '../controllers/usuarios.controller';
import { router } from './app';

router.get('/mostrartodos',mostrartodos);
router.get('/mostrar',mostrar);
router.get('/mostrarusuario/:id',mostrarusuario);
router.post('/insertar',insertar);
router.put('/actualizar/:id',actualizar);
router.delete('/eliminar/:id',eliminar);

export default router;
